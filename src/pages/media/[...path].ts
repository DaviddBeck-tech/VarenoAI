import type { APIRoute } from 'astro';
import { getOriginalUploadUrl } from '../../lib/image-proxy';

/**
 * Proxy endpoint for WordPress media files
 * Routes: /media/2026/04/photo.jpg → fetches from <cmsDomain>/wp-content/uploads/2026/04/photo.jpg
 * (cmsDomain lấy từ src/config/site.ts)
 *
 * This hides the CMS domain from end users and keeps all URLs under the site domain
 */
export const GET: APIRoute = async ({ params }) => {
  const mediaPath = params.path;

  if (!mediaPath) {
    return new Response('Not found', { status: 404 });
  }

  const originalUrl = getOriginalUploadUrl(mediaPath);

  try {
    const response = await fetch(originalUrl);

    if (!response.ok) {
      return new Response('Media not found', { status: response.status });
    }

    const contentType = response.headers.get('content-type') || 'application/octet-stream';
    const body = await response.arrayBuffer();

    return new Response(body, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable', // Cache 1 year (WP filenames are unique)
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('[Media Proxy] Failed to fetch:', originalUrl, error);
    return new Response('Failed to fetch media', { status: 502 });
  }
};
