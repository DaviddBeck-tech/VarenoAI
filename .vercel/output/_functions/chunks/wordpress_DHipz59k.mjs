import { S as SITE } from './site_xhkTMlR1.mjs';

const WP_GRAPHQL_URL = SITE.graphqlUrl;
const CMS_HOST_ESCAPED = SITE.cmsDomain.replace(/\./g, "\\.");
const WP_UPLOAD_PATTERNS = [
  new RegExp(`https?://${CMS_HOST_ESCAPED}/wp-content/uploads/`, "g"),
  /https?:\/\/localhost:\d+\/[^/]+\/wp-content\/uploads\//g
  // local dev (MAMP)
];
function rewriteWpUrls(data) {
  if (data === null || data === void 0) return data;
  if (typeof data === "string") {
    let result = data;
    for (const pattern of WP_UPLOAD_PATTERNS) {
      result = result.replace(new RegExp(pattern.source, "g"), "/media/");
    }
    return result;
  }
  if (Array.isArray(data)) {
    return data.map((item) => rewriteWpUrls(item));
  }
  if (typeof data === "object") {
    const result = {};
    for (const [key, value] of Object.entries(data)) {
      result[key] = rewriteWpUrls(value);
    }
    return result;
  }
  return data;
}
async function fetchGraphQL(query, variables = {}) {
  const response = await fetch(WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query, variables })
  });
  if (!response.ok) {
    throw new Error(`WordPress GraphQL request failed: ${response.status} ${response.statusText}`);
  }
  const json = await response.json();
  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error(`GraphQL Error: ${json.errors.map((e) => e.message).join(", ")}`);
  }
  return rewriteWpUrls(json.data);
}
async function getPosts(first = 10, lang = "vi") {
  const languageCode = lang.toUpperCase();
  const data = await fetchGraphQL(`
    query GetPosts($first: Int!, $language: LanguageCodeFilterEnum!) {
      posts(first: $first, where: { status: PUBLISH, language: $language }) {
        nodes {
          id
          title
          slug
          date
          excerpt
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `, { first, language: languageCode });
  return data.posts.nodes;
}
async function getPostBySlug(slug) {
  const data = await fetchGraphQL(`
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        slug
        date
        modified
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        seo {
          title
          description
          canonicalUrl
          openGraph {
            image {
              url
            }
          }
        }
      }
    }
  `, { slug });
  return data.post;
}
async function getRelatedPosts(categorySlug, excludeSlug, count = 5) {
  try {
    const data = await fetchGraphQL(`
      query GetRelatedPosts($categorySlug: String!, $count: Int!) {
        posts(first: $count, where: { categoryName: $categorySlug, status: PUBLISH }) {
          nodes {
            id
            title
            slug
            date
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    `, { categorySlug, count: count + 1 });
    return data.posts.nodes.filter((p) => p.slug !== excludeSlug).slice(0, count);
  } catch (e) {
    console.error("Failed to fetch related posts:", e);
    return [];
  }
}
async function getPageBySlug(slug) {
  try {
    const data = await fetchGraphQL(`
      query GetPageBySlug($slug: ID!) {
        page(id: $slug, idType: URI) {
          id
          title
          slug
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    `, { slug });
    return data.page;
  } catch (error) {
    console.error(`[getPageBySlug] WordPress không phản hồi cho slug "${slug}":`, error);
    return null;
  }
}
async function getContactPageData(lang = "vi") {
  const slugMap = { vi: "lien-he", en: "contact" };
  const primarySlug = slugMap[lang];
  const fallbackSlug = lang === "vi" ? "contact" : "lien-he";
  try {
    const CONTACT_FIELDS = `
      contactPageFields {
        heroBadge
        heroTitle
        heroSubtitle
        contactStatusText
        contactBranchAddress
        contactAddress
        contactPhone
        contactEmail
        contactFacebookUrl
        contactYoutubeUrl
        contactTiktokUrl
        contactLinkedinUrl
        subjects {
          subjectName
        }
        stat1Number
        stat1Suffix
        stat1Label
        stat2Number
        stat2Suffix
        stat2Label
        stat3Prefix
        stat3Number
        stat3Suffix
        stat3Label
      }
    `;
    const [primaryRes, fallbackRes] = await Promise.allSettled([
      fetchGraphQL(`query { page(id: "${primarySlug}", idType: URI) { ${CONTACT_FIELDS} } }`),
      fetchGraphQL(`query { page(id: "${fallbackSlug}", idType: URI) { ${CONTACT_FIELDS} } }`)
    ]);
    const data = primaryRes.status === "fulfilled" ? primaryRes.value : null;
    const data2 = fallbackRes.status === "fulfilled" ? fallbackRes.value : null;
    if (data?.page?.contactPageFields) {
      return data.page.contactPageFields;
    }
    return data2?.page?.contactPageFields ?? null;
  } catch (error) {
    console.warn("[Contact] Không thể fetch data từ WP, dùng fallback:", error);
    return null;
  }
}
async function getBlogPageData(lang = "vi") {
  const slugMap = { vi: "bai-viet", en: "blog" };
  const primarySlug = slugMap[lang];
  const fallbackSlug = lang === "vi" ? "bai-viet" : "blog";
  try {
    const BLOG_FIELDS = `
      blogPageFields {
        heroTitle
        heroHighlight
        heroSubtitle
      }
    `;
    const data = await fetchGraphQL(`query { page(id: "${primarySlug}", idType: URI) { ${BLOG_FIELDS} } }`);
    const data2 = await fetchGraphQL(`query { page(id: "${fallbackSlug}", idType: URI) { ${BLOG_FIELDS} } }`);
    return data?.page?.blogPageFields ?? data2?.page?.blogPageFields ?? null;
  } catch (error) {
    console.warn("[Blog] Không thể fetch page data từ WP, dùng fallback:", error);
    return null;
  }
}

export { getRelatedPosts as a, getBlogPageData as b, getPosts as c, getContactPageData as d, getPageBySlug as e, getPostBySlug as g };
