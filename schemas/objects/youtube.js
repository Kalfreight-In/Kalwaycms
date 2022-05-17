import React from 'react';

const YouTubePreview = ({ value }) => {
  const id = value.url.split('be/')[1];
  const url = `https://www.youtube.com/embed/${id}`;
  if (!id) {
    return <div>Missing Youtube URL</div>;
  }
  return (
    <iframe
      width="560"
      height="315"
      src={url}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};

export default {
  name: 'youtube',
  type: 'object',
  title: 'Youtube Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
  },

  preview: {
    select: {
      url: 'url',
    },
    // component: YouTubePreview,
  },
};
