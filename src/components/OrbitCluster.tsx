import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * OrbitCluster — cụm thẻ ảnh chạy trên một QUỸ ĐẠO GÓC VUÔNG (rounded-rectangle).
 * Thẻ đi TỪ TRÊN XUỐNG dọc cạnh trái (hiện rõ), tới góc dưới bẻ vuông rồi chạy
 * sang phải và ĐI RA NGOÀI MÀN HÌNH; đường về (cạnh phải + cạnh trên) nằm ngoài
 * khung nên vô hình → thẻ tái xuất từ trên, lặp vô tận.
 *
 * Điều khiển bằng MỘT tham số `phi` (độ lệch dọc theo chu vi, đơn vị vòng [0,1)).
 * Thẻ i luôn ở vị trí s_i = base_i + phi trên đường path → mọi thẻ luôn NẰM TRÊN
 * quỹ đạo. KÉO = cuộn `phi` theo path (không kéo tự do, không snap), thả có quán
 * tính nhẹ rồi trôi tiếp. GSAP ticker cho vòng lặp mượt + gsap.set ghi transform.
 */

export interface OrbitImage {
  src: string;
  width: number;
  height: number;
  alt?: string;
  badge?: string;
}

interface Props {
  images: OrbitImage[];
  /** Tốc độ trôi (vòng/giây). */
  speed?: number;
  /**
   * CSS selector của một phần tử mốc (vd. nút "Liên hệ tư vấn"). Nếu có, thẻ chỉ
   * BẺ SANG PHẢI khi đi xuống NGANG TÂM phần tử này (đo lúc runtime → khớp mọi
   * bố cục/responsive). Không có → dùng mốc mặc định gần đáy cụm.
   */
  bottomAnchorSelector?: string;
  /**
   * `floating`: ảnh là nhân vật/mascot nền trong suốt → BỎ khung thẻ (nền trắng,
   * viền, bóng hộp, cắt bo) để nhân vật "trôi" tự do; dùng drop-shadow theo alpha
   * cho có chiều sâu. Mặc định false = thẻ ảnh screenshot như cũ.
   */
  floating?: boolean;
}

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

export default function OrbitCluster({
  images,
  speed = 0.02,
  bottomAnchorSelector,
  floating = false,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const N = cards.length;
    if (!N) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── 1. HÌNH HỌC: rounded-rectangle (px trong container) ────────────────
    // Cạnh trái (Lx) nằm trong vùng nhìn; cạnh phải (Rx) & cạnh trên (Ty) đẩy RA
    // NGOÀI khung để đường về vô hình; góc bo nhỏ → đọc ra "góc vuông".
    let W = 0, H = 0;
    const rect = { Lx: 0, Rx: 0, Ty: 0, By: 0, cr: 0, vpRight: 0 };
    const computeGeo = () => {
      W = container.clientWidth;
      H = container.clientHeight;
      const gr = container.getBoundingClientRect();
      rect.Lx = W * 0.28; // cạnh trái (hiện) — đẩy phải chút để thẻ to không lấn chữ
      // Rx & Ty đẩy RẤT xa ra ngoài khung → chu vi quỹ đạo dài ra → các thẻ (chia
      // đều theo độ dài) GIÃN CÁCH NHAU HƠN trong vùng nhìn (bớt chồng). Đây là núm
      // chính chỉnh khoảng cách thẻ: Rx/Ty càng xa → thẻ càng thưa.
      rect.Rx = W * 2.1; // cạnh phải (xa ngoài màn hình bên phải)
      rect.Ty = -H * 1.32; // cạnh trên (cao hẳn trên màn hình)
      // Mép phải MÀN HÌNH thật, quy về toạ độ local của container. Thẻ mờ dần khi x
      // tiến tới đây → mờ đúng lúc trượt ra khỏi cạnh màn hình (container hẹp hơn
      // nhiều màn hình, nên KHÔNG lấy mép container kẻo mờ giữa chừng).
      rect.vpRight = window.innerWidth - gr.left;
      // Cạnh dưới = nơi thẻ BẺ sang phải. Mặc định gần đáy; nếu có mốc (nút
      // "Liên hệ tư vấn") thì canh đúng TÂM nút → thẻ đi xuống tới ngang nút mới rẽ.
      let by = H * 0.9;
      if (bottomAnchorSelector) {
        const anchor = document.querySelector(bottomAnchorSelector);
        if (anchor) {
          const ar = anchor.getBoundingClientRect();
          by = ar.top + ar.height / 2 - gr.top;
        }
      }
      rect.By = clamp(by, H * 0.32, H * 0.98);
      rect.cr = Math.min(W, H) * 0.06; // bo góc nhỏ (gần vuông)
    };
    computeGeo();

    // ── 2. DỰNG POLYLINE CHU VI + ĐỘ DÀI TÍCH LUỸ ─────────────────────────
    // Thứ tự để s TĂNG = đi xuống cạnh trái → sang phải cạnh dưới → lên cạnh
    // phải → sang trái cạnh trên → khép vòng.
    let path: { x: number; y: number; s: number }[] = [];
    let pathLen = 0; // tổng độ dài chu vi (px) — để đổi dịch chuyển con trỏ ↔ Δphi
    const buildPath = () => {
      const { Lx, Rx, Ty, By, cr } = rect;
      const raw: [number, number][] = [];
      const line = (x0: number, y0: number, x1: number, y1: number, n: number) => {
        for (let i = 0; i < n; i++) {
          const t = i / n;
          raw.push([x0 + (x1 - x0) * t, y0 + (y1 - y0) * t]);
        }
      };
      const arc = (cx: number, cy: number, a0: number, a1: number, n: number) => {
        for (let i = 0; i < n; i++) {
          const a = a0 + (a1 - a0) * (i / n);
          raw.push([cx + cr * Math.cos(a), cy + cr * Math.sin(a)]);
        }
      };
      const S = 44, A = 8;
      line(Lx, Ty + cr, Lx, By - cr, S); // XUỐNG cạnh trái
      arc(Lx + cr, By - cr, Math.PI, Math.PI / 2, A); // góc dưới-trái
      line(Lx + cr, By, Rx - cr, By, S); // SANG PHẢI cạnh dưới (ra ngoài)
      arc(Rx - cr, By - cr, Math.PI / 2, 0, A); // góc dưới-phải
      line(Rx, By - cr, Rx, Ty + cr, S); // LÊN cạnh phải (ngoài khung)
      arc(Rx - cr, Ty + cr, 0, -Math.PI / 2, A); // góc trên-phải
      line(Rx - cr, Ty, Lx + cr, Ty, S); // SANG TRÁI cạnh trên (ngoài khung)
      arc(Lx + cr, Ty + cr, -Math.PI / 2, -Math.PI, A); // góc trên-trái

      let len = 0;
      const cum = [0];
      for (let i = 1; i < raw.length; i++) {
        len += Math.hypot(raw[i][0] - raw[i - 1][0], raw[i][1] - raw[i - 1][1]);
        cum.push(len);
      }
      // khép vòng
      const close = Math.hypot(
        raw[0][0] - raw[raw.length - 1][0],
        raw[0][1] - raw[raw.length - 1][1],
      );
      const total = len + close;
      pathLen = total;
      path = raw.map((p, i) => ({ x: p[0], y: p[1], s: cum[i] / total }));
    };
    buildPath();

    // Điểm trên path tại tham số s ∈ [0,1) (nội suy tuyến tính giữa các đỉnh).
    const pathPoint = (s: number) => {
      s = ((s % 1) + 1) % 1;
      let i = 0;
      while (i < path.length - 1 && path[i + 1].s <= s) i++;
      const a = path[i];
      const b = path[(i + 1) % path.length];
      const bs = i + 1 < path.length ? b.s : 1;
      const f = bs > a.s ? (s - a.s) / (bs - a.s) : 0;
      return { x: a.x + (b.x - a.x) * f, y: a.y + (b.y - a.y) * f };
    };
    // s của điểm trên path gần con trỏ nhất (điểm "cầm" khi bắt đầu kéo).
    const nearestS = (px: number, py: number) => {
      let bs = 0, bd = Infinity;
      for (const p of path) {
        const d = (p.x - px) * (p.x - px) + (p.y - py) * (p.y - py);
        if (d < bd) { bd = d; bs = p.s; }
      }
      return bs;
    };
    // Vector đơn vị TIẾP TUYẾN của path tại s (theo chiều s tăng). Dùng để CHIẾU
    // dịch chuyển con trỏ lên hướng đường → kéo mượt, không bị giật do bám "điểm
    // gần nhất".
    const pathTangent = (s: number) => {
      const eps = 0.0015;
      const a = pathPoint(s - eps);
      const b = pathPoint(s + eps);
      const dx = b.x - a.x, dy = b.y - a.y;
      const m = Math.hypot(dx, dy) || 1;
      return [dx / m, dy / m] as const;
    };

    // ── 3. POSE: vị trí + scale + độ mờ + z ───────────────────────────────
    const MIN_S = 0.72; // scale khi ra mép phải
    const MAX_S = 1.02; // scale trên cạnh trái (thẻ chính)
    // Nghiêng cố định nhẹ mỗi thẻ (KHÔNG theo tiếp tuyến — cạnh dọc sẽ xoay 90°).
    const tilt = cards.map((_, i) => [-3, 2, -2, 3, -1, 2][i % 6]);

    const pose = (s: number, i: number) => {
      const { x, y } = pathPoint(s);
      // Hiện ra (fade-in) khi đổ xuống từ đỉnh — bắt đầu SỚM hơn: mờ 0 tại y=-0.07H
      // (trên đỉnh stage một chút), đậm đủ tại y=0.06H → thẻ ló ra cao hơn trước.
      const fadeIn = clamp((y + H * 0.07) / (H * 0.13), 0, 1);
      // MỜ DẦN khi trượt ra: chỉ mờ ở đoạn cuối sát mép MÀN HÌNH thật (vpRight),
      // đạt 0 ngay tại mép → tan dần đúng lúc ra khỏi màn hình (không mờ sớm).
      const fadeOut = clamp((rect.vpRight - x) / (W * 0.34), 0, 1);
      const opacity = Math.min(fadeIn, fadeOut);
      // To ở cạnh trái, nhỏ dần khi chạy ra phải.
      const prog = clamp((x - rect.Lx) / (W - rect.Lx), 0, 1);
      const scale = MAX_S - (MAX_S - MIN_S) * prog;
      return {
        x,
        y,
        scale,
        rot: tilt[i],
        z: Math.round(scale * 100),
        opacity,
      };
    };

    // ── 4. TRẠNG THÁI CHUNG ───────────────────────────────────────────────
    const baseS = cards.map((_, i) => i / N);
    let phi = 0;
    let vel = 0; // vòng/giây (quán tính)

    const paint = (el: HTMLElement, p: ReturnType<typeof pose>) =>
      gsap.set(el, {
        x: p.x,
        y: p.y,
        scale: p.scale,
        rotation: p.rot,
        zIndex: p.z,
        opacity: p.opacity,
      });
    const render = () => {
      for (let i = 0; i < N; i++) paint(cards[i], pose(baseS[i] + phi, i));
    };

    cards.forEach((el) => gsap.set(el, { xPercent: -50, yPercent: -50 }));
    render();
    gsap.to(container, { opacity: 1, duration: 0.6, ease: "power2.out" });

    // Fonts nạp xong có thể đổi chiều cao cột chữ → tâm nút mốc dịch → tính lại By.
    let disposed = false;
    document.fonts?.ready.then(() => {
      if (disposed) return;
      computeGeo();
      buildPath();
      render();
    });

    // ── 5. TỰ TRÔI + QUÁN TÍNH ────────────────────────────────────────────
    const AUTO = reduce ? 0 : speed;
    let dragging = false;
    // Vòng lặp DUY NHẤT vẽ mỗi frame (rAF của GSAP). Khi kéo, pointermove chỉ cập
    // nhật phi/vel; ticker mới vẽ → mỗi frame vẽ đúng 1 lần, hết giật. Luôn đăng ký
    // ticker để kéo vẫn vẽ được cả khi prefers-reduced-motion (chỉ tắt tự trôi).
    const tick = (_t: number, dtMs: number) => {
      if (W === 0) return;
      if (!dragging) {
        if (reduce) return; // reduced-motion: đứng yên khi không kéo
        const dt = Math.min(dtMs, 50) / 1000;
        phi += (AUTO + vel) * dt;
        vel *= 0.92;
        if (Math.abs(vel) < 0.002) vel = 0;
      }
      render();
    };
    gsap.ticker.add(tick);

    // ── 6. KÉO CUỘN DỌC THEO PATH (chiếu lên tiếp tuyến → mượt, không snap) ──
    const MAX_V = 1.4; // kẹp vận tốc (vòng/giây)
    let cLeft = 0, cTop = 0; // cache vị trí container (tránh reflow mỗi pointermove)
    let lastX = 0, lastY = 0, lastTime = 0;
    let grabS = 0; // điểm đang "cầm" trên path (tham số s)
    const onDown = (e: PointerEvent) => {
      dragging = true;
      vel = 0;
      const r = container.getBoundingClientRect();
      cLeft = r.left;
      cTop = r.top;
      lastX = e.clientX - cLeft;
      lastY = e.clientY - cTop;
      grabS = nearestS(lastX, lastY);
      lastTime = e.timeStamp;
      container.style.cursor = "grabbing";
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const x = e.clientX - cLeft, y = e.clientY - cTop;
      const dx = x - lastX, dy = y - lastY;
      // Δphi = (dịch chuyển con trỏ · tiếp tuyến) / chu vi → cuộn theo đúng hướng
      // đường tại điểm cầm, mượt bất kể con trỏ lệch ngang khỏi đường.
      const [tx, ty] = pathTangent(grabS);
      const dPhi = (dx * tx + dy * ty) / (pathLen || 1);
      phi += dPhi;
      grabS = ((grabS + dPhi) % 1 + 1) % 1;
      const dts = Math.max(8, e.timeStamp - lastTime) / 1000;
      if (!reduce) vel = clamp(dPhi / dts, -MAX_V, MAX_V);
      lastX = x;
      lastY = y;
      lastTime = e.timeStamp;
      // KHÔNG render ở đây — ticker vẽ mỗi frame.
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      container.style.cursor = "grab";
    };
    container.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);

    // ── 7. RESPONSIVE ─────────────────────────────────────────────────────
    const ro = new ResizeObserver(() => {
      computeGeo();
      buildPath();
      render();
    });
    ro.observe(container);

    return () => {
      disposed = true;
      gsap.ticker.remove(tick);
      container.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      ro.disconnect();
    };
  }, [images, speed, bottomAnchorSelector]);

  return (
    <div
      ref={containerRef}
      className="orbit-cluster"
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0,
        touchAction: "none",
        cursor: "grab",
      }}
    >
      {images.map((img, i) => (
        <div
          key={i}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          className="orbit-card"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            // Mascot dọc → thẻ hẹp hơn ảnh screenshot ngang cho khỏi quá to.
            // Mascot dọc → thẻ hẹp hơn ảnh screenshot ngang cho khỏi quá to.
            width: floating
              ? "clamp(9rem, 15vw, 13rem)"
              : "clamp(16rem, 26vw, 22rem)",
            borderRadius: floating ? "0" : "var(--shape-card)",
            border: floating ? "none" : "1px solid hsl(var(--border) / 0.8)",
            background: floating ? "transparent" : "hsl(var(--card))",
            // Bóng: floating dùng drop-shadow bám theo hình nhân vật (không phải
            // hộp) để mascot nổi khối; thường dùng bóng hộp elev-3.
            boxShadow: floating ? "none" : "var(--elev-3)",
            filter: floating
              ? "drop-shadow(0 18px 24px hsl(var(--primary) / 0.18))"
              : "none",
            overflow: floating ? "visible" : "hidden",
            willChange: "transform",
          }}
        >
          <img
            src={img.src}
            width={img.width}
            height={img.height}
            alt={img.alt ?? ""}
            draggable={false}
            loading={i < 2 ? "eager" : "lazy"}
            decoding="async"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              userSelect: "none",
              pointerEvents: "none",
            }}
          />
          {img.badge ? (
            <span
              style={{
                position: "absolute",
                left: "0.75rem",
                bottom: "0.75rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.35rem 0.6rem",
                fontFamily: '"Roboto", sans-serif',
                fontSize: "0.6875rem",
                fontWeight: 600,
                color: "hsl(var(--foreground))",
                background: "hsl(var(--card) / 0.9)",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--shape-pill)",
                boxShadow: "var(--elev-1)",
                backdropFilter: "blur(6px)",
                pointerEvents: "none",
                whiteSpace: "nowrap",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {img.badge}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
