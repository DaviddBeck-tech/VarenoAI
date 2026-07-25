import createGlobe from "cobe";
import { useEffect, useRef } from "react";

/**
 * CtaGlobe — quả cầu chấm bi WebGL (thư viện `cobe`) làm TRANG TRÍ ở góc trên
 * phải của CtaBand. Nguồn gốc: ruixen.ui/globe-feature-section, nhưng ở đây chỉ
 * giữ lại phần globe và nhuộm theo màu thương hiệu.
 *
 *  • Tự xoay chậm, KHÔNG tương tác (pointer-events do CSS cha khoá) → không cướp
 *    cuộn trang như bản gốc có kéo-thả.
 *  • Theme-aware: đọc class `dark` trên <html> và nghe sự kiện `theme-changed`
 *    (do ThemeToggle phát) để đổi bảng màu sáng/tối ngay tại chỗ.
 *  • Tôn trọng prefers-reduced-motion: vẽ một khung tĩnh, không xoay.
 *  • Marker gom về Việt Nam + Đông Nam Á, đúng định vị "AI cho doanh nghiệp Việt".
 *
 * LƯU Ý API: cobe@2.x KHÔNG có `onRender` và KHÔNG tự chạy vòng lặp — nó trả về
 * { update, destroy } và ta tự drive bằng requestAnimationFrame + globe.update().
 */

type Vec3 = [number, number, number];
type Vec2 = [number, number];

interface Palette {
  dark: number;
  diffuse: number;
  mapBrightness: number;
  mapBaseBrightness?: number;
  baseColor: Vec3;
  markerColor: Vec3;
  glowColor: Vec3;
  opacity?: number;
}

// --primary = 221 83% 53% ≈ rgb(36,99,235). Marker/quầng sáng bám màu này.
const THEMES: Record<"light" | "dark", Palette> = {
  light: {
    dark: 0,
    // base/glow trắng; bóng xám mép do shader cobe (pow(i,.4)) — xử lý bằng
    // mix-blend-mode: multiply ở .cta-globe (CtaBand), không phải lớp phủ CSS.
    diffuse: 1.2,
    mapBrightness: 5,
    mapBaseBrightness: 0,
    baseColor: [1, 1, 1],
    markerColor: [0.14, 0.39, 0.92], // xanh thương hiệu
    glowColor: [1, 1, 1],
    opacity: 1,
  },
  dark: {
    dark: 1,
    diffuse: 1.2,
    mapBrightness: 4,
    mapBaseBrightness: 0.05,
    baseColor: [0.13, 0.17, 0.28], // navy tối, hoà vào nền dark
    markerColor: [0.35, 0.58, 1], // xanh sáng hơn để nổi trên nền tối
    glowColor: [0.14, 0.22, 0.48],
    opacity: 1, // luôn set rõ để không bị giữ opacity light khi đổi theme
  },
};

const MARKERS: { location: Vec2; size: number }[] = [
  { location: [21.0278, 105.8342], size: 0.11 }, // Hà Nội
  { location: [10.8231, 106.6297], size: 0.1 }, // TP.HCM
  { location: [16.0544, 108.2022], size: 0.06 }, // Đà Nẵng
  { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
  { location: [13.7563, 100.5018], size: 0.05 }, // Bangkok
  { location: [3.139, 101.6869], size: 0.04 }, // Kuala Lumpur
  { location: [35.6762, 139.6503], size: 0.06 }, // Tokyo
  { location: [37.5665, 126.978], size: 0.05 }, // Seoul
  { location: [40.7128, -74.006], size: 0.06 }, // New York
  { location: [51.5074, -0.1278], size: 0.05 }, // London
];

export default function CtaGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = canvas.offsetWidth;
    let phi = 0.6; // xoay sẵn để châu Á hướng ra trước ngay từ khung đầu
    let raf = 0;

    const currentTheme = () =>
      document.documentElement.classList.contains("dark") ? "dark" : "light";

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi,
      theta: 0.28,
      mapSamples: 20000, // dày hơn cho quả cầu cỡ lớn ở góc CtaBand
      markers: MARKERS,
      ...THEMES[currentTheme()],
    });

    const draw = () =>
      globe.update({ phi, width: width * 2, height: width * 2 });

    const frame = () => {
      if (!reduce) phi += 0.004; // trôi chậm cho một chi tiết trang trí êm
      draw();
      raf = requestAnimationFrame(frame);
    };

    const onResize = () => {
      width = canvas.offsetWidth;
      if (reduce) draw(); // khi tĩnh, tự vẽ lại theo kích thước mới
    };

    // Đổi theme: cập nhật màu tại chỗ, không dựng lại WebGL context.
    const applyTheme = () => globe.update({ ...THEMES[currentTheme()] });

    if (reduce) draw();
    else raf = requestAnimationFrame(frame);

    // Hiện dần sau khung đầu để tránh nháy canvas rỗng.
    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
    });

    window.addEventListener("resize", onResize);
    window.addEventListener("theme-changed", applyTheme);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("theme-changed", applyTheme);
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        width: "100%",
        height: "100%",
        opacity: 0,
        transition: "opacity 0.8s ease",
        contain: "layout paint size",
      }}
    />
  );
}
