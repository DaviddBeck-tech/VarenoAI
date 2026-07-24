const NAV = {
  home: "/",
  services: "/services/",
  about: "/about/",
  solutions: "/solutions/",
  /** "Tin tức" chỉ là NHÃN — route vẫn là /blog/ (giữ SEO + URL bài viết) */
  news: "/blog/",
  contact: "/contact/",
  /** Còn route, nhưng đã bỏ khỏi nav — được link từ trang sản phẩm */
  pricing: "/pricing/"
};

export { NAV as N };
