import type { NavigationLink, Site } from './types.ts';

export const SITE: Site = {
    author: 'René Kuhm',
    url: 'https://TDPBlog.com.ar',
    title: 'TDPBlog',
    description:
        'TDPBlog es tu espacio para descubrir tutoriales y novedades sobre las últimas tecnologías. Aprende, explora y mantente al día con guías prácticas y análisis detallados.',
    shortDescription: '',
};

export const NavigationLinks: NavigationLink[] = [
    { name: 'Posts', url: '/posts' },
    { name: 'Category', url: '/categorias' },
    { name: 'Timeline', url: '/timeline' },
    { name: 'About', url: '/posts/about-tdpblog' },
    { name: 'Friends', url: '/friends' },
];

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
];

export const Settings = {
    GoogleAnalytics: {
        enable: false,
        id: 'G-TKQ4L3ZDSF',
    },

    UmamiAnalytics: {
        enable: true,
        dataWebsiteID: 'bf63658a-9418-4f39-a6a1-5a0cedb6e429',
    },

    Comment: {
        enable: true,
        disqusShortname: 'https-tdpblog-com-ar', // Asegúrate de que sea tu shortname correcto para Disqus
    },

    Assets: {
        uploadAssetsToS3: !!process.env.S3_ENABLE,
        config: {
            paths: ['assets'],
            endpoint: process.env.S3_ENDPOINT as string,
            bucket: process.env.S3_BUCKET as string,
            accessKey: process.env.S3_ACCESS_KEY as string,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
            root: 'gblog',
        },
    },
};

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
};
