import { defineCollection, z } from 'astro:content'
import { file, glob } from 'astro/loaders'
import { parse as parseYaml } from 'yaml'

// Astro 5 moved content config here from src/content/config.ts and replaced
// the implicit `type: 'content' | 'data'` with explicit loaders. The schemas
// below are unchanged; only how the entries are found is new.

const posts = defineCollection({
    loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            banner: image().or(z.string()),

            // This banner will be shown in blog lists(/posts) if provided.
            banner2: image().or(z.string()).optional(),

            // The article OG cover, if not provided, use summary card, otherwise summary_large_image
            ogImage: image().or(z.string()).optional(),

            category: z.string(),
            pubDate: z.coerce.date(),

            // Should the article be added to SELECTED POSTS? will be displayed on the /posts page if true.
            selected: z.boolean().optional(),

            tags: z.array(z.string()).optional(),

            // not use, just record this value since its from my previous blog system
            updatedDate: z.coerce.date().optional(),
            oldViewCount: z.number().optional(),
        }),
})

const categoryCollection = defineCollection({
    loader: glob({ base: './src/content/categorias', pattern: '**/*.md' }),
    schema: () =>
        z.object({
            title: z.string(),
            description: z.string(),
        }),
})

// friends is a single YAML file holding an array. The file loader needs each
// item to carry an id, and these entries have none, so the parser derives one
// from the name.
const friendsCollection = defineCollection({
    loader: file('./src/content/friends/index.yml', {
        parser: (text) => {
            const items = parseYaml(text) as Record<string, unknown>[]
            return items.map((item, index) => ({
                ...item,
                id: String(item.name ?? index),
            }))
        },
    }),
    schema: () =>
        z.object({
            title: z.string(),
            name: z.string(),
            description: z.string(),
            avatar: z.string(),
            social: z.object({
                twitter: z.string().optional(),
                blog: z.string().optional(),
                github: z.string().optional(),
            }),
        }),
})

export const collections = {
    posts,
    categorias: categoryCollection,
    friends: friendsCollection,
}
