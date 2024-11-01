import type { NavigationLink, Site } from './types.ts'

export const SITE: Site = {
    author: 'René Kuhm',
    url: 'https://TDPBlog.com.ar',
    title: 'TDPBlog',
    description:
        'TDPBlog es tu espacio para descubrir tutoriales y novedades sobre las últimas tecnologías. Aprende, explora y mantente al día con guías prácticas y análisis detallados.',
    shortDescription: '',
}

export const NavigationLinks: NavigationLink[] = [
    { name: 'Posts', url: '/posts' },
    { name: 'Category', url: '/categorias' },
    { name: 'Timeline', url: '/timeline' },
    { name: 'About', url: '/posts/about-tdpblog' },
    { name: 'Friends', url: '/friends' },
]

export const FooterLinks = [
    {
        section: 'Blog',
        links: [
            { name: 'Posts', url: '/posts' },
            { name: 'Timeline', url: '/timeline' },
            { name: 'categorias', url: '/categorias' },
            { name: 'About Me', url: '/posts/about-tdpblog' },
        ],
    },
    {
        section: 'Other',
        links: [
            { name: 'RSS', url: '/rss.xml' },
            { name: 'Site Map', url: '/sitemap-index.xml' },
            { name: 'Twitter', url: '' },
        ],
    },
]

export const Settings = {
    GoogleAnalytics: {
        enable: false,
        id: 'G-TKQ4L3ZDSF',
    },

    // See https://github.com/umami-software/umami
    UmamiAnalytics: {
        enable: true,
        dataWebsiteID: 'bf63658a-9418-4f39-a6a1-5a0cedb6e429',
    },

    Comment: {
        // todo: should I use meta or process?
        // process reports an error when used locally,
        // and meta cannot retrieve environment variables in Cloudflare environment.
        // enable: !!(import.meta.env.COMMENT_ENABLE),
        enable: true,

        // please visit https://tdpblog.com.ar to learn how to configure it
        giscus: {
            repo: 'Rene-Kuhm/tdpblog-Discussions' as `${string}/${string}`, // Asegura que sigue el formato `${string}/${string}`
            repoId: 'R_kgDONJPOKQ',
            category: 'Announcements',
            categoryId: 'DIC_kwDONJPOKc4Cj5zw',
            darkThem: 'dark',
            lightThem: 'light',
        },
    },

    Assets: {
        // If you don't want to upload the build assert(image/js/css/etc...) to anywhere, just set this to false
        uploadAssetsToS3: !!process.env.S3_ENABLE,
        config: {
            // see https://github.com/syhily/astro-uploader to get how to configure the uploader,
            // The following configuration will upload the compiled `assets` folder to S3 or R2.
            // You can set a separate domain for it so that you can access all resources using a CDN domain name.
            //
            // For example: https://images.godruoyi.com/gblog/assets/brand-logo.webp
            //
            // Note that you may also need to modify `build.assetsPrefix` in `astro.config.mjs` if you want to
            // automatically replace all images/js/css with a CDN link.
            paths: ['assets'],
            endpoint: process.env.S3_ENDPOINT as string,
            bucket: process.env.S3_BUCKET as string,
            accessKey: process.env.S3_ACCESS_KEY as string,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
            root: 'gblog',
        },
    },
}

export const SEO = {
    title: SITE.title,
    description: SITE.description,
    structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'inLanguage': 'en-US',
        '@id': SITE.url,
        'url': SITE.url,
        'name': SITE.title,
        'description': SITE.description,
        'isPartOf': {
            '@type': 'WebSite',
            'url': SITE.url,
            'name': SITE.title,
            'description': SITE.description,
        },
    },
}