export default defineAppConfig({
  title: 'URL',
  email: 'conf@d.c',
  github: 'https://google.com',
  twitter: 'https://google.com',
  telegram: 'https://google.com',
  mastodon: 'https://google.com',
  blog: 'https://google.com',
  description: 'Nome de domínio de encaminhamento de link curto de cassino online, você também pode acessar diretamente o nome de domínio. Este site fornece apenas serviços de encaminhamento, e todos os sites encaminhados são sites legais. O acesso de usuários menores de 18 anos é proibido.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
