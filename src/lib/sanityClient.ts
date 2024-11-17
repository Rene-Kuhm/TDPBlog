const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: 'tu-project-id',
  dataset: 'production',
  apiVersion: '2023-11-16',
  useCdn: true,
});

export default client;
