export default {
  type: 'object',
  name: 'imageRow',
  title: 'Image rows',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      type: 'array',
      name: 'rows',
      of: [{ type: 'imageSectionSlider' }],
    },
  ],
};
