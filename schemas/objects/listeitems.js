export default {
  type: 'object',
  name: 'listeitems',
  title: 'listeitems',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      type: 'string',
      name: 'label',
    },

    {
      type: 'array',
      name: 'rows',
      of: [{ type: 'string' }],
    },
  ],
};
