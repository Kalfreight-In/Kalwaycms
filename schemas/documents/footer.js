export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
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
      name: 'content',
      type: 'array',
      title: 'Footer Selection',
      description: 'Add, edit, and reorder sections',
      of: [{ type: 'textSection' }],
    },
  ],
};
