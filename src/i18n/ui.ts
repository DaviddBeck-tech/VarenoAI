export const languages = {
  vi: 'Tiếng Việt',
  en: 'English',
};

export const defaultLang = 'vi';

// ⚠️ t() ép kiểu key = keyof ui['vi'] ⇒ MỌI key phải có mặt ở CẢ HAI khối,
// nếu không `astro check` sẽ báo lỗi kiểu.
// File này chỉ giữ chuỗi "khung" (nav, footer, cta).
// Nội dung sản phẩm nằm ở src/config/products.ts, đường dẫn ở src/config/nav.ts.
export const ui = {
  vi: {
    'nav.home': 'Trang chủ',
    'nav.services': 'Dịch vụ',
    'nav.about': 'Giới thiệu',
    'nav.solutions': 'Giải pháp',
    'nav.news': 'Tin tức',
    'nav.blog': 'Blog',
    'nav.pricing': 'Bảng giá',
    'nav.contact': 'Liên hệ',
    'nav.servicesToggle': 'Mở menu Dịch vụ',

    // Mega-menu "Dịch vụ". {brand} được Header thay bằng SITE.brandName
    // để đổi thương hiệu vẫn chỉ phải sửa src/config/site.ts.
    'nav.ecosystemTitle': 'Nền tảng {brand}',
    'nav.ecosystemBlurb': 'Một tài khoản, dữ liệu dùng chung cho mọi sản phẩm.',
    'nav.servicesAll': 'Xem tất cả dịch vụ',

    'products.comingSoon': 'Sắp ra mắt',
    'products.learnMore': 'Tìm hiểu thêm',
    // Alt của ảnh chụp giao diện; ghép thành "Giao diện ChatVareno"
    'products.uiPreview': 'Giao diện',
    // Nhãn của slot ảnh chưa có (sản phẩm chưa cấp screenshot)
    'products.previewSoon': 'Ảnh giao diện sắp cập nhật',
    // Thẻ mở rộng ở trang chủ: nhãn nút mở, nút đóng, tiêu đề danh sách điểm chính
    'products.openCard': 'Xem chi tiết',
    'products.closeCard': 'Đóng',
    'products.highlights': 'Điểm chính',

    'cta.title': 'Sẵn sàng tăng tốc cùng AI?',
    'cta.subtitle': 'Đội ngũ của chúng tôi sẽ tư vấn giải pháp phù hợp cho doanh nghiệp bạn.',
    'cta.button': 'Liên hệ tư vấn',

    'footer.tagline': 'Hệ sinh thái AI cho doanh nghiệp Việt: tư vấn bán hàng, sản xuất nội dung và tự động hoá, dùng chung một nền tảng dữ liệu.',
    'footer.product': 'Sản phẩm',
    'footer.features': 'Tính năng',
    'footer.privacy': 'Chính sách bảo mật',
    'footer.terms': 'Điều khoản dịch vụ',
    'footer.company': 'Công ty',
    'footer.about': 'Giới thiệu',
    'footer.careers': 'Tuyển dụng',
    'footer.resources': 'Tài nguyên',
    'footer.docs': 'Tài liệu',
    'footer.helpCenter': 'Trung tâm hỗ trợ',
    'footer.apiRef': 'API Reference',
    'footer.community': 'Cộng đồng',

    // Slugs cho các trang hệ thống (Dùng chung 1 URL Frontend)
    'slug.privacy': '/legal/privacy-policy/',
    'slug.community': '/legal/community/',
    'slug.terms': '/legal/terms-of-service/',
    // Trỏ về trang tĩnh mới — không còn phụ thuộc WordPress (/legal/about-us/ trả 500 khi WP chưa dựng)
    'slug.about': '/about/',
    'slug.careers': '/legal/careers/',
    'slug.docs': '/legal/documentation/',
    'slug.helpCenter': '/legal/help-center/',
    'slug.apiRef': '/legal/api-reference/',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.solutions': 'Solutions',
    'nav.news': 'News',
    'nav.blog': 'Blog',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.servicesToggle': 'Open Services menu',

    'nav.ecosystemTitle': 'The {brand} platform',
    'nav.ecosystemBlurb': 'One account and shared data across every product.',
    'nav.servicesAll': 'View all services',

    'products.comingSoon': 'Coming soon',
    'products.learnMore': 'Learn more',
    'products.uiPreview': 'Interface of',
    'products.previewSoon': 'Interface preview coming soon',
    'products.openCard': 'View details',
    'products.closeCard': 'Close',
    'products.highlights': 'Highlights',

    'cta.title': 'Ready to accelerate with AI?',
    'cta.subtitle': 'Our team will help you find the right solution for your business.',
    'cta.button': 'Talk to us',

    'footer.tagline': 'An AI ecosystem for Vietnamese business: sales assistants, content production and automation, all on one data platform.',
    'footer.product': 'Product',
    'footer.features': 'Features',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.company': 'Company',
    'footer.about': 'About',
    'footer.careers': 'Careers',
    'footer.resources': 'Resources',
    'footer.docs': 'Documentation',
    'footer.helpCenter': 'Help Center',
    'footer.apiRef': 'API Reference',
    'footer.community': 'Community',

    // Slugs cho các trang hệ thống (Dùng chung 1 URL Frontend)
    'slug.privacy': '/legal/privacy-policy/',
    'slug.community': '/legal/community/',
    'slug.terms': '/legal/terms-of-service/',
    'slug.about': '/about/',
    'slug.careers': '/legal/careers/',
    'slug.docs': '/legal/documentation/',
    'slug.helpCenter': '/legal/help-center/',
    'slug.apiRef': '/legal/api-reference/',
  },
} as const;
