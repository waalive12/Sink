export default defineAppConfig({
  title: 'Url',
  email: 'Url@Url.me',
  // github: 'https://github.com/ccbikai/sink',
  // twitter: 'https://sink.cool/kai',
  // telegram: 'https://sink.cool/telegram',
  // mastodon: 'https://sink.cool/mastodon',
  // blog: 'https://sink.cool/blog',
  description: 'Encaminhamento de link curto dedicado a cassino online, verificação de segurança',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
