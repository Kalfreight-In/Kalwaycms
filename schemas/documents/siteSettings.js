export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  // __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      readOnly: ({ currentUser }) => {
        return !currentUser.roles.find(({ name }) => name === 'administrator');
      },
    },
    {
      title: 'Open graph',
      name: 'openGraph',
      description:
        'These will be the default meta tags on all pages that have not set their own',
      type: 'openGraph',
    },
  ],
};
