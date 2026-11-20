import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.number(),
    region: z.string(),
    disciplines: z.array(z.string()),
    summary: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    challenge: z.string(),
    solution: z.string(),
    techStack: z.array(z.string()),
    category: z.enum(['TYPO3', 'Branding', 'WordPress', 'Magento', 'Mobile Application', 'Headless Website']),
    cover: z.string(),
    hoverImage: z.string().optional(),
    initials: z.string(),
    liveUrl: z.string().optional(),
  }),
});

const lab = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lab' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Branding', 'UI/UX', 'Motion', 'TYPO3']),
    year: z.number(),
    aspectRatio: z.enum(['square', 'portrait', 'landscape']),
    description: z.string(),
    cover: z.string(),
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
    readingTime: z.number(),
    author: z.string().default('Milan Pandya'),
    category: z.string().optional(),
  }),
});

export const collections = { work, lab, journal };
