// ─── WordPress GraphQL Client ───────────────────────────────
// Central module: fetches data from WPGraphQL endpoint

import { SITE } from '../config/site';

const WP_GRAPHQL_URL = SITE.graphqlUrl;

// ─── Types ──────────────────────────────────────────────────

export interface WPSeo {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  openGraph?: {
    image?: {
      url?: string;
    };
  };
}

export interface WPPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  modified: string;
  excerpt: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  } | null;
  author: {
    node: {
      name: string;
      avatar: {
        url: string;
      };
    };
  };
  categories: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
  seo?: WPSeo | null;
}

export interface WPPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  } | null;
}

export interface WPMenuItem {
  id: string;
  label: string;
  url: string;
  path: string;
}

export interface WPMediaItem {
  id: string;
  sourceUrl: string;
  altText: string;
  mediaDetails: {
    width: number;
    height: number;
  };
}

// ─── GraphQL Fetcher ────────────────────────────────────────

interface GraphQLResponse<T> {
  data: T;
  errors?: { message: string }[];
}

/**
 * WP upload URL patterns to rewrite to /media/ proxy path
 * (domain CMS lấy từ src/config/site.ts)
 */
const CMS_HOST_ESCAPED = SITE.cmsDomain.replace(/\./g, '\\.');
const WP_UPLOAD_PATTERNS = [
  new RegExp(`https?://${CMS_HOST_ESCAPED}/wp-content/uploads/`, 'g'),
  /https?:\/\/localhost:\d+\/[^/]+\/wp-content\/uploads\//g,  // local dev (MAMP)
];

/**
 * Recursively walk through GraphQL response and rewrite all WP upload URLs
 * This ensures all sourceUrl, content HTML, etc. use the /media/ proxy path
 */
export function rewriteWpUrls<T>(data: T): T {
  if (data === null || data === undefined) return data;

  if (typeof data === 'string') {
    let result = data;
    for (const pattern of WP_UPLOAD_PATTERNS) {
      result = result.replace(new RegExp(pattern.source, 'g'), '/media/');
    }
    return result as T;
  }

  if (Array.isArray(data)) {
    return data.map(item => rewriteWpUrls(item)) as T;
  }

  if (typeof data === 'object') {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
      result[key] = rewriteWpUrls(value);
    }
    return result as T;
  }

  return data;
}

async function fetchGraphQL<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const response = await fetch(WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`WordPress GraphQL request failed: ${response.status} ${response.statusText}`);
  }

  const json: GraphQLResponse<T> = await response.json();

  if (json.errors) {
    console.error('GraphQL Errors:', json.errors);
    throw new Error(`GraphQL Error: ${json.errors.map(e => e.message).join(', ')}`);
  }

  // Rewrite all WP upload URLs to use /media/ proxy path
  return rewriteWpUrls(json.data);
}

// ─── Data Fetching Functions ────────────────────────────────

/**
 * Get a list of posts
 */
export async function getPosts(first: number = 10, lang: 'vi' | 'en' = 'vi'): Promise<WPPost[]> {
  const languageCode = lang.toUpperCase();
  
  const data = await fetchGraphQL<{ posts: { nodes: WPPost[] } }>(`
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

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const data = await fetchGraphQL<{ post: WPPost | null }>(`
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

/**
 * Get all post slugs (for static generation)
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const data = await fetchGraphQL<{ posts: { nodes: { slug: string }[] } }>(`
    query GetAllSlugs {
      posts(first: 100, where: { status: PUBLISH }) {
        nodes {
          slug
        }
      }
    }
  `);

  return data.posts.nodes.map(post => post.slug);
}

/**
 * Get related posts by category slug, excluding a specific post
 */
export async function getRelatedPosts(categorySlug: string, excludeSlug: string, count: number = 5): Promise<WPPost[]> {
  try {
    const data = await fetchGraphQL<{ posts: { nodes: WPPost[] } }>(`
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

    // Filter out the current post
    return data.posts.nodes.filter(p => p.slug !== excludeSlug).slice(0, count);
  } catch (e) {
    console.error('Failed to fetch related posts:', e);
    return [];
  }
}

/**
 * Get a list of pages
 */
export async function getPages(): Promise<WPPage[]> {
  const data = await fetchGraphQL<{ pages: { nodes: WPPage[] } }>(`
    query GetPages {
      pages(first: 20, where: { status: PUBLISH }) {
        nodes {
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
    }
  `);

  return data.pages.nodes;
}

/**
 * Get a single page by slug
 *
 * Trả `null` khi WordPress không kết nối được, thay vì ném lỗi — cùng cách
 * xử lý với getContactPageData / getBlogPageData / getRelatedPosts.
 * Nếu ném lỗi, các trang /legal/[slug] sẽ trả HTTP 500 thay vì 404.
 */
export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  try {
    const data = await fetchGraphQL<{ page: WPPage | null }>(`
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

/**
 * Get navigation menu items
 */
export async function getMenuItems(menuLocation: string = 'PRIMARY'): Promise<WPMenuItem[]> {
  const data = await fetchGraphQL<{ menuItems: { nodes: WPMenuItem[] } }>(`
    query GetMenuItems($location: MenuLocationEnum!) {
      menuItems(where: { location: $location }) {
        nodes {
          id
          label
          url
          path
        }
      }
    }
  `, { location: menuLocation });

  return data.menuItems.nodes;
}

/**
 * Get media items
 */
export async function getMediaItems(first: number = 20): Promise<WPMediaItem[]> {
  const data = await fetchGraphQL<{ mediaItems: { nodes: WPMediaItem[] } }>(`
    query GetMediaItems($first: Int!) {
      mediaItems(first: $first) {
        nodes {
          id
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  `, { first });

  return data.mediaItems.nodes;
}

// ─── Blog Page Types ────────────────────────────────────────

export interface BlogPageData {
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
}

// ─── Contact Page Types ─────────────────────────────────────

export interface ContactStat {
  prefix?: string;
  number: number;
  suffix: string;
  label: string;
}

export interface ContactSubject {
  subjectName: string;
}

export interface ContactPageData {
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  contactStatusText: string;
  contactBranchAddress: string;
  contactAddress: string;
  contactPhone: string;
  contactEmail: string;
  contactFacebookUrl: string;
  contactYoutubeUrl: string;
  contactTiktokUrl: string;
  contactLinkedinUrl: string;
  subjects: ContactSubject[];
  stat1Number: number;
  stat1Suffix: string;
  stat1Label: string;
  stat2Number: number;
  stat2Suffix: string;
  stat2Label: string;
  stat3Prefix: string;
  stat3Number: number;
  stat3Suffix: string;
  stat3Label: string;
}

/**
 * Get Contact Page data from ACF fields
 * @param lang - 'vi' (default) queries page "lien-he", 'en' queries page "contact"
 */
export async function getContactPageData(lang: 'vi' | 'en' = 'vi'): Promise<ContactPageData | null> {
  // Mapping ngôn ngữ → slug WordPress page
  const slugMap = { vi: 'lien-he', en: 'contact' };
  const primarySlug = slugMap[lang];
  const fallbackSlug = lang === 'vi' ? 'contact' : 'lien-he';

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

    // Query cả primary và fallback song song để tiết kiệm thời gian (giảm từ 1.5s xuống 0.7s)
    const [primaryRes, fallbackRes] = await Promise.allSettled([
      fetchGraphQL<{ page: { contactPageFields: ContactPageData } | null }>(`query { page(id: "${primarySlug}", idType: URI) { ${CONTACT_FIELDS} } }`),
      fetchGraphQL<{ page: { contactPageFields: ContactPageData } | null }>(`query { page(id: "${fallbackSlug}", idType: URI) { ${CONTACT_FIELDS} } }`)
    ]);

    const data = primaryRes.status === 'fulfilled' ? primaryRes.value : null;
    const data2 = fallbackRes.status === 'fulfilled' ? fallbackRes.value : null;

    if (data?.page?.contactPageFields) {
      return data.page.contactPageFields;
    }

    return data2?.page?.contactPageFields ?? null;

  } catch (error) {
    console.warn('[Contact] Không thể fetch data từ WP, dùng fallback:', error);
    return null;
  }
}

// ─── Blog Page Data ─────────────────────────────────────────

/**
 * Get Blog Page header data from ACF fields
 * Queries the WP page with slug "blog"
 */
export async function getBlogPageData(lang: 'vi' | 'en' = 'vi'): Promise<BlogPageData | null> {
  // Mapping ngôn ngữ → slug WordPress page
  const slugMap = { vi: 'bai-viet', en: 'blog' };
  const primarySlug = slugMap[lang];
  const fallbackSlug = lang === 'vi' ? 'bai-viet' : 'blog';
  try {
    const BLOG_FIELDS = `
      blogPageFields {
        heroTitle
        heroHighlight
        heroSubtitle
      }
    `;

    const data = await fetchGraphQL<{
      page: { blogPageFields: BlogPageData } | null;
    }>(`query { page(id: "${primarySlug}", idType: URI) { ${BLOG_FIELDS} } }`);

    const data2 = await fetchGraphQL<{
      page: { blogPageFields: BlogPageData } | null;
    }>(`query { page(id: "${fallbackSlug}", idType: URI) { ${BLOG_FIELDS} } }`);

    return data?.page?.blogPageFields ?? data2?.page?.blogPageFields ?? null;
  } catch (error) {
    console.warn('[Blog] Không thể fetch page data từ WP, dùng fallback:', error);
    return null;
  }
}
