const GET = () => {
  return new Response(null, {
    status: 301,
    headers: {
      Location: "/sitemap-index.xml",
      "Cache-Control": "public, max-age=86400"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
