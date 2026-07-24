import { S as SITE } from './site_xhkTMlR1.mjs';

function getOriginalUploadUrl(mediaPath) {
  const WP_UPLOADS_BASE = SITE.uploadsBaseUrl;
  return `${WP_UPLOADS_BASE}${mediaPath}`;
}

const GET = async ({ params }) => {
  const mediaPath = params.path;
  if (!mediaPath) {
    return new Response("Not found", { status: 404 });
  }
  const originalUrl = getOriginalUploadUrl(mediaPath);
  try {
    const response = await fetch(originalUrl);
    if (!response.ok) {
      return new Response("Media not found", { status: response.status });
    }
    const contentType = response.headers.get("content-type") || "application/octet-stream";
    const body = await response.arrayBuffer();
    return new Response(body, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
        // Cache 1 year (WP filenames are unique)
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    console.error("[Media Proxy] Failed to fetch:", originalUrl, error);
    return new Response("Failed to fetch media", { status: 502 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
