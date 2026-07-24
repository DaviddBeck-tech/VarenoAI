// ─── Cuộn mượt quán tính (Lenis) ─────────────────────────────────────────────
// Lenis cuộn CHÍNH document thật (không dùng transform), nên window.scrollY,
// IntersectionObserver (reveal animation ở BaseLayout), header .scrolled và mọi
// position:sticky/fixed vẫn chạy đúng như cuộn native — chỉ thêm lớp nội suy
// (lerp) cho con lăn chuột nên trang trượt có gia tốc/giảm tốc mượt.
//
// Bật/tắt có điều kiện:
//   · KHÔNG bật khi người dùng chọn "giảm chuyển động" (a11y) → cuộn native.
//   · CHỈ bật trên thiết bị trỏ chính xác (chuột/trackpad). Cảm ứng để native:
//     syncTouch:false đảm bảo mobile cuộn bằng cơ chế gốc, không giật.
// Cả hai điều kiện được theo dõi động: đổi cài đặt hệ thống là tự bật/tắt lại.
import Lenis from "lenis";

let lenis: Lenis | null = null;

const reduceMQ = window.matchMedia("(prefers-reduced-motion: reduce)");
const fineMQ = window.matchMedia("(pointer: fine)");

function enable() {
  if (lenis) return;
  lenis = new Lenis({
    // Hệ số nội suy: thấp = "trôi" mượt/đằm hơn, cao = bám tay hơn.
    lerp: 0.08,
    wheelMultiplier: 1,
    smoothWheel: true,
    // Cảm ứng dùng cuộn native (mượt sẵn, tránh hijack gây khó chịu trên mobile).
    syncTouch: false,
    // Lenis tự chạy vòng lặp requestAnimationFrame.
    autoRaf: true,
    // Click anchor href="#id" cuộn mượt tới đích; offset chừa header fixed cao
    // 4rem (khớp scroll-padding-top:5rem ở global.css) để tiêu đề không bị che.
    anchors: { offset: -80 },
    // Vùng cuộn con (mục lục sticky, nội dung dài…) vẫn cuộn bằng native.
    allowNestedScroll: true,
    // Bỏ qua smoothing khi con lăn nằm trên vùng cần cuộn riêng: bên trong
    // <dialog> đang mở (tấm sản phẩm EcosystemShowcase) hoặc phần tử đánh dấu
    // data-lenis-prevent → để chúng cuộn native, không "khóa cứng" nội dung.
    prevent: (node) =>
      !!node.closest("[data-lenis-prevent], dialog[open]"),
  });
}

function disable() {
  lenis?.destroy();
  lenis = null;
}

function sync() {
  if (fineMQ.matches && !reduceMQ.matches) enable();
  else disable();
}

sync();
reduceMQ.addEventListener("change", sync);
fineMQ.addEventListener("change", sync);

// ─── Giữ FPS khi cuộn: gắn cờ .is-scrolling lên <html> ───────────────────────
// backdrop-filter:blur ở nhiều "kính mờ" (header, thẻ) phải lấy mẫu + làm mờ lại
// vùng phía sau MỖI khung hình khi cuộn → nguồn giật chính. global.css tắt blur
// khi có .is-scrolling; ở đây chỉ bật/tắt cờ đó. Dùng listener 'scroll' native
// (passive) nên phủ CẢ Lenis (cuộn document thật) lẫn cảm ứng/giảm-chuyển-động.
let idleTimer = 0;
const root = document.documentElement;
function onScrollTick() {
  if (!root.classList.contains("is-scrolling")) {
    root.classList.add("is-scrolling");
  }
  clearTimeout(idleTimer);
  // ~140ms sau lần cuộn cuối coi như đã dừng → trả blur lại.
  idleTimer = window.setTimeout(() => root.classList.remove("is-scrolling"), 140);
}
window.addEventListener("scroll", onScrollTick, { passive: true });
