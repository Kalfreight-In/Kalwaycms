import { MasterDetailIcon } from '@sanity/icons';

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: MasterDetailIcon,
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Do not change the name of this field its dangerous ⚠️⚠️⚠️',
      readOnly: ({ currentUser }) => {
        return !currentUser.roles.find(({ name }) => name === 'administrator');
      },
    },

    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'hero' },
        { type: 'imageSection' },
        { type: 'mailchimp' },
        { type: 'textSection' },
        { type: 'infoRows' },
        { type: 'imageSectionSlider' },
        { type: 'imageRow' },
        { type: 'banner' },
        { type: 'videoPlug' },
        { type: 'listeitems' },
        { type: 'videoComponent' },
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
};
