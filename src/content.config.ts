import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    curse: z.string(),
    spellcast: z.string(),
    result: z.string(),
    tags: z.array(z.string()),
    pubDate: z.string().datetime({ offset: true }),
  }),
});

export const collections = { projects };