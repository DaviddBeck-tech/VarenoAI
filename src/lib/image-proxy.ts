/**
 * Image URL rewriting utility
 * Transforms WordPress media URLs to use the frontend domain
 *
 * Example (với cmsDomain trong src/config/site.ts):
 *   Input:  https://cms.example.com/wp-content/uploads/2026/04/photo.jpg
 *   Output: /media/2026/04/photo.jpg
 */

import { SITE } from '../config/site';

const CMS_HOST_ESCAPED = SITE.cmsDomain.replace(/\./g, '\\.');
const WP_UPLOAD_PATTERNS = [
  new RegExp(`https?://${CMS_HOST_ESCAPED}/wp-content/uploads/`, 'g'),
  /https?:\/\/localhost:\d+\/[^/]+\/wp-content\/uploads\//g,  // local dev (MAMP)
];

/**
 * Rewrite a single WordPress image URL to use the frontend proxy path
 */
export function rewriteImageUrl(url: string | undefined | null): string | undefined {
  if (!url) return undefined;

  for (const pattern of WP_UPLOAD_PATTERNS) {
    // Reset regex lastIndex since we use /g flag
    pattern.lastIndex = 0;
    if (pattern.test(url)) {
      pattern.lastIndex = 0;
      return url.replace(pattern, '/media/');
    }
  }

  return url;
}

/**
 * Rewrite all WordPress image URLs found in an HTML string (e.g. post content)
 */
export function rewriteContentImageUrls(html: string | undefined | null): string {
  if (!html) return '';

  let result = html;
  for (const pattern of WP_UPLOAD_PATTERNS) {
    result = result.replace(pattern, '/media/');
  }

  return result;
}

/**
 * Get the original WP upload URL from a proxied /media/ path
 * Used by the proxy endpoint to fetch the actual image
 */
export function getOriginalUploadUrl(mediaPath: string): string {
  const WP_UPLOADS_BASE = SITE.uploadsBaseUrl;

  return `${WP_UPLOADS_BASE}${mediaPath}`;
}
