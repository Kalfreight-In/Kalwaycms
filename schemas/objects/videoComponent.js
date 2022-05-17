export default {
  type: 'object',
  name: 'videoComponent',
  title: 'Youtube',
  fields: [
    {
      type: 'string',
      name: 'Youtubeurl',
      title: 'Youtubeurl',
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
      };
    },
  },
};
