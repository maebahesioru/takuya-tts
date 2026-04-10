export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://takuya-voice.vercel.app/sitemap.xml',
  };
}
