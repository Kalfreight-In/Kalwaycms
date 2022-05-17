export default {
  type: 'object',
  name: 'linkrow',
  title: 'linkrow',
  fields: [
    {
      type: 'array',
      name: 'rows',
      of: [{ type: 'navLink' }],
    },
  ],
};
