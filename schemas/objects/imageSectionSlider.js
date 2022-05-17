export default {
  type: 'object',
  name: 'imageSectionSlider',
  title: 'Image with text Slider',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text',
    },
    {
      type: 'array',
      name: 'rows',
      of: [{ type: 'image' }],
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'label',
      media: 'image',
    },
    prepare({ heading, media }) {
      return {
        title: `Image: ${heading}`,
        subtitle: 'Image section',
        media,
      };
    },
  },
};
