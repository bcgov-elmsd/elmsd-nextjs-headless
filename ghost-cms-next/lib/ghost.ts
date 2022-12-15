const GhostAdminAPI = require("@tryghost/admin-api");
const GhostContentAPI = require("@tryghost/content-api");

const ADMIN_API_KEY = process.env.ADMIN_API_KEY;
const CONTENT_API_KEY = process.env.CONTENT_API_KEY;
const API_URL = process.env.API_URL;

export async function getPostBySlug(slug: string) {
  const api = new GhostContentAPI({
    url: API_URL,
    key: CONTENT_API_KEY,
    version: "v5.0",
  });
  console.log(slug);
  const post = await api.posts
    .read({
      slug: slug,
      filter: "visibility:public",
    })
    .catch((err: any) => {
      console.error(err);
    });

  return post;
}

export async function getPosts() {
  const api = new GhostContentAPI({
    url: API_URL,
    key: CONTENT_API_KEY,
    version: "v5.0",
  });
  const posts = await api.posts
    .browse({
      filter: "visibility:public",
      include: "tags",
    })
    .catch((err: any) => {
      console.error(err);
    });

  return posts;
}

export async function getMemberOnlyPosts() {
  const api = new GhostAdminAPI({
    url: API_URL,
    key: ADMIN_API_KEY,
    version: "v3.0",
  });

  const posts = await api.posts
    .browse({
      filter: "visibility:members",
      include: "tags",
    })
    .catch((err: any) => {
      console.error(err);
    });

  return posts;
}

export async function getMemberOnlyPostBySlug(slug: string) {
  const api = new GhostAdminAPI({
    url: API_URL,
    key: ADMIN_API_KEY,
    version: "v3.0",
  });
  console.log(slug);
  const post = await api.posts
    .read({
      slug: slug,
      formats: 'html'
    })
    .catch((err: any) => {
      console.error(err);
    });

  return post;
}
