import type { CollectionEntry } from "astro:content";

const getSortedPosts = (posts: CollectionEntry<"post">[]) => {
  return posts
};

export default getSortedPosts;
