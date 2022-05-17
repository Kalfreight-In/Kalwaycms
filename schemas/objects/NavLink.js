export default {
  type: 'object',
  name: 'navLink',
  title: 'navLink',
  fields: [
    {
      name: 'Link',
      type: 'string',
      title: 'UrlLink',
    },
    {
      name: 'Pagename',
      type: 'string',
      title: 'Name',
    },
  ],
  preview: {
    select: {
      heading: 'Pagename',
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
      };
    },
  },
};
