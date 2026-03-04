import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    gameSlug: z.string(),
    authorName: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog };
