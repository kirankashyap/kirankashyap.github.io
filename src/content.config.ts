import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
	books: defineCollection({
		// Load Markdown files in the src/content/books directory.
		loader: glob({ base: './src/content/books', pattern: '**/*.md' }),
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				subtitle: z.string(),
				description: z.string(),
				status: z.enum(['published', 'upcoming']).default('published'),
				authors: z.array(z.string()),
				amazonUrl: z.string().optional(),
				publishDate: z.coerce.date().optional(),
				tags: z.array(z.string()),
				cover: image(),
				coverAlt: z.string(),
			}),
	}),
};
