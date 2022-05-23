export default {
  name: 'site-config',
  type: 'document',
  title: 'Site configuration',
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  // __experimental_actions: [/* "create", "delete", */ 'update', 'publish'],
  fieldsets: [{ name: 'footer', title: 'Footer' }],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title',
      readOnly: ({ currentUser }) => {
        return !currentUser.roles.find(({ name }) => name === 'administrator');
      },
    },
    {
      title: 'deleteloacalstorage',
      name: 'deleteLocalStorage',
      type: 'boolean',
      initialValue: {
        deleteLocalStorage: false
      },
      readOnly: ({ currentUser }) => {
        return !currentUser.roles.find(({ name }) => name === 'administrator');
      },
      
    }
    {
      name: 'Email',
      type: 'string',
      title: 'Email address',
    },
    {
      name: 'Address',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone number',
    },

    {
      name: 'Timing_1',
      type: 'string',
      title: 'Timing_1',
    },
    {
      name: 'Timing_2',
      type: 'string',
      title: 'Timing_2',
    },
    // {
    //   title: 'URL',
    //   name: 'url',
    //   type: 'url',
    //   description: 'The main site url. Used to create canonical url',
    // },
    // {
    //   name: 'frontpage',
    //   type: 'reference',
    //   description: 'Choose page to be the frontpage',
    //   to: { type: 'page' },
    // },
    // {
    //   title: 'Site language',
    //   description:
    //     'Should be a valid bcp47 language code like en, en-US, no or nb-NO',
    //   name: 'lang',
    //   type: 'string',
    //   validation: (Rule) =>
    //     Rule.custom((lang) =>
    //       bcp47.parse(lang) ? true : 'Please use a valid bcp47 code'
    //     ),
    // },
    {
      title: 'Brand logo',
      description:
        'Best choice is to use an SVG where the color are set with currentColor',
      name: 'logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      title: 'Header Logo',
      description:
        'Best choice is to use an SVG where the color are set with currentColor',
      name: 'Headlogo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    // {
    //   title: 'Main navigation',
    //   name: 'mainNavigation',
    //   description: 'Select pages for the top menu',
    //   validation: (Rule) => [
    //     Rule.max(5).warning('Are you sure you want more than 5 items?'),
    //     Rule.unique().error('You have duplicate menu items'),
    //   ],
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [{ type: 'route' }],
    //     },
    //   ],
    // },
    // {
    //   title: 'Footer navigation items',
    //   name: 'footerNavigation',
    //   type: 'array',
    //   validation: (Rule) => [
    //     Rule.max(10).warning('Are you sure you want more than 10 items?'),
    //     Rule.unique().error('You have duplicate menu items'),
    //   ],
    //   fieldset: 'footer',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [{ type: 'route' }],
    //     },
    //   ],
    // },
    // {
    //   name: 'footerText',
    //   type: 'simplePortableText',
    //   fieldset: 'footer',
    // },
  ],
};
