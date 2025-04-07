export default defineAppConfig({
  title: 'Sink',
  email: 'conf@d.c',
  github: 'https://google.com',
  twitter: 'https://google.com',
  telegram: 'https://google.com',
  mastodon: 'https://google.com',
  blog: 'https://google.com',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
