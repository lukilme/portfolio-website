import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    slug:        z.string(),
    description: z.string(),
    curse:       z.string(),      // client brief / problem
    spellcast:   z.string(),      // role / approach
    result:      z.string(),      // outcome
    tags:        z.array(z.string()),
    pubDate:     z.string().datetime({ offset: true }),
  }),
});

export const collections = { projects };
