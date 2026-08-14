import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
// @astrojs/tailwind is discontinued and caps out at astro 5; Tailwind 4 ships
// as a Vite plugin instead, wired in under vite.plugins below.
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import { SITE } from './src/config.ts'
import { remarkReadingTime } from './src/support/plugins.ts'
import { uploadAssetsToS3 } from './src/support/uploader.ts'


export default defineConfig({
    site: SITE.url,
    base: '/TDPBlog',
    image: {
        // If you don't want to optimize images during the BUILD process,
        // you can open this comment. It will significantly reduce the build time but won't optimize any images anymore.
        // service: passthroughImageService(),

        // Astro 5 refuses to optimize remote images from hosts that are not
        // listed here. These are the ones the posts actually reference.
        domains: [
            'i.postimg.cc',
            'ik.imagekit.io',
            'img.youtube.com',
            'avatars.githubusercontent.com',
            'tdpblog.com',
            'tdpblog.com.ar',
        ],
    },
    integrations: [
        partytown(),
        mdx(),
        sitemap(),
        react(),
        (await import('@playform/compress')).default({
            CSS: true,
            HTML: true,
            Image: false,
            JavaScript: true,
            SVG: true,
            Logger: 2,
        }),
        uploadAssetsToS3(),
    ],
    markdown: {
        remarkPlugins: [remarkReadingTime],
        shikiConfig: {
            theme: 'github-light',
            themes: {
                light: 'github-light',
                dark: 'github-dark',
            },
            wrap: false,
        },
    },
    devToolbar: {
        enabled: false,
    },
    vite: {
        plugins: [tailwindcss()],
    },
    prefetch: true,
    output: 'static',
    build: {
        assets: 'assets',
    },
})
