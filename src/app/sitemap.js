export default function sitemap() {
  return [
    {
      url: 'https://srivelanconstruction.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://srivelanconstruction.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://srivelanconstruction.com/service',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://srivelanconstruction.com/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    {
      url: 'https://srivelanconstruction.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://srivelanconstruction.com/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://srivelanconstruction.com/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ];
}
