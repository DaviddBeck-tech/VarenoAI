import * as cheerio from 'cheerio';

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function parseHtmlForToc(html: string | undefined | null) {
  if (!html) {
    return { content: '', toc: [] };
  }

  const $ = cheerio.load(html);
  const toc: TocItem[] = [];

  // Find all h2 and h3 elements
  $('h2, h3').each((i, el) => {
    const $el = $(el);
    const text = $el.text().trim();
    
    // Generate a simple id from the text
    const id = text
      .toLowerCase()
      .replace(/đ/g, 'd')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, ''); // Remove leading/trailing dashes
    
    // Fallback if ID is empty
    const finalId = id || `heading-${i}`;
    
    // Add id attribute to the element in the DOM
    $el.attr('id', finalId);

    // Get the heading level (2 for h2, 3 for h3)
    const level = parseInt(el.tagName.replace('h', ''), 10);

    toc.push({
      id: finalId,
      text,
      level,
    });
  });

  // Ảnh trong nội dung WP: thêm lazy/async để không chặn tải trang.
  // Bỏ qua ảnh đầu tiên (có thể nằm gần đầu viewport); ảnh featured phía trên đã eager.
  $('img').each((i, el) => {
    const $img = $(el);
    if (i > 0 && !$img.attr('loading')) $img.attr('loading', 'lazy');
    if (!$img.attr('decoding')) $img.attr('decoding', 'async');
  });

  return {
    // Return HTML with injected IDs
    content: $.html(),
    toc,
  };
}
