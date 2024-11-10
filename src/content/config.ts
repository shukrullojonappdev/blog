import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    tags: z.array(z.string()),
    publishDate: z.date(),
    // relatedPosts: z.array(reference("posts")),
  }),
});

export const collections = {
  posts: postCollection,
};
