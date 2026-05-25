export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://srivelanconstruction.com/sitemap.xml',
    }
  }