const GhostAdminAPI = require("@tryghost/admin-api");

const ADMIN_API_KEY = process.env.ADMIN_API_KEY;
const CONTENT_API_KEY = process.env.CONTENT_API_KEY;
const API_URL = process.env.API_URL;

export async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${API_URL}/ghost/api/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`
  ).then((res) => res.json());

  const posts = res.posts;
  console.log(posts[0]);
  return posts[0];
}

export async function getPosts() {
  const res = await fetch(
    `${API_URL}/ghost/api/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,excerpt`
  ).then((res) => res.json());
  console.log(res);
  const posts = res.posts;

  return posts;
}

export async function getMemberOnlyPost() {
  const api = new GhostAdminAPI({
    url: API_URL,
    key: ADMIN_API_KEY,
    version: "v3",
  });

  const posts = await api.posts
    .browse({
      filter: "tags:member-only",
      include: "tags",
    })
    .catch((err: any) => {
      console.error(err);
    });

  return posts;
}
