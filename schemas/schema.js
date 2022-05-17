// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import category from './category';
import post from './post';
import author from './author';
// Document types
import page from './documents/page';
import route from './documents/route';
// import siteConfig from './documents/siteConfig'
import mainImage from './objects/mainImage';
// Object types
import cta from './objects/cta';
import embedHTML from './objects/embedHTML';
import figure from './objects/figure';
import internalLink from './objects/internalLink';
import link from './objects/link';
import portableText from './objects/portableText';
import simplePortableText from './objects/simplePortableText';

// Landing page sections
import hero from './objects/hero';
import imageSection from './objects/imageSection';
import imageSectionSlider from './objects/imageSectionSlider';
import mailchimp from './objects/mailchimp';
import textSection from './objects/textSection';
import infoRows from './objects/infoRows';
import videoPlug from './plugs/videoPlug';
import banner from './objects/banner';
import imageRow from './objects/imageRow';
import listeitems from './objects/listeitems';
import footer from './documents/footer';
import siteSettings from './documents/siteSettings';
import siteConfig from './documents/siteConfig';
import youtube from './objects/youtube';
import Navbar from './documents/Navbar';
import linkrow from './objects/Linkrow';
import navLink from './objects/NavLink';
import openGraph from './objects/openGraph';
import videoComponent from './objects/videoComponent';
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    page,
    // siteSettings,
    mainImage,
    navLink,
    linkrow,
    Navbar,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    cta,
    embedHTML,
    figure,
    hero,
    imageSection,
    internalLink,
    link,
    mailchimp,

    portableText,
    // route,
    simplePortableText,
    footer,
    infoRows,
    videoComponent,
    // siteConfig,
    textSection,
    imageSectionSlider,
    imageRow,
    banner,
    youtube,
    openGraph,
    videoPlug,
    listeitems,
    siteConfig,
    post,
    author,
    category,
  ]),
});
