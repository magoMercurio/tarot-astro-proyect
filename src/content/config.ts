import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const tarotkeys = defineCollection({
	type: 'content',
	schema: z.object({
		nombre: z.string(),
		descripcion: z.string(),
		numero: z.number(),
		letra: z.string(),
		nombreLetra: z.string(),
		significadoLetra: z.string(),
		color: z.string(),
		notaMusical: z.string(),
		astrologica: z.string(),
		inteligencia: z.string(),
		alquimica: z.string(),
		elemento: z.string(),
		palabraClave: z.string(),
		otras: z.string(),
		tarotImage: z.string().optional(),
	}),
});

export const collections = { blog, tarotkeys };
