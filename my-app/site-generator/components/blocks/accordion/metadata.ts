import { ComponentMetadata } from '../../../engine/enhanced-component-registry';

/**
 * Metadata for the Accordion block component and its variants
 */
export const accordionMetadata: ComponentMetadata = {
  type: 'block',
  name: 'accordion',
  description: 'A vertically stacked set of interactive headings that reveal or hide associated content',
  defaultVariant: 'simple-accordion',
  compatibleWith: ['faq', 'pricing', 'features'],
  variants: [
    {
      id: 'simple-accordion',
      name: 'Simple Accordion',
      description: 'A clean accordion with minimal styling',
      thumbnail: '/thumbnails/blocks/accordion/simple.jpg',
      tags: ['simple', 'clean', 'minimal']
    },
    {
      id: 'bordered-accordion',
      name: 'Bordered Accordion',
      description: 'Accordion with borders around items for clear separation',
      thumbnail: '/thumbnails/blocks/accordion/bordered.jpg',
      tags: ['bordered', 'outlined', 'clear']
    },
    {
      id: 'faq-accordion',
      name: 'FAQ Accordion',
      description: 'Styled specifically for frequently asked questions with question mark icons',
      thumbnail: '/thumbnails/blocks/accordion/faq.jpg',
      tags: ['faq', 'questions', 'answers', 'help']
    },
    {
      id: 'separated-accordion',
      name: 'Separated Accordion',
      description: 'Accordion with items separated by space between each',
      thumbnail: '/thumbnails/blocks/accordion/separated.jpg',
      tags: ['separated', 'spaced', 'distinct']
    },
    {
      id: 'icon-accordion',
      name: 'Icon Accordion',
      description: 'Accordion with customizable icons for each item',
      thumbnail: '/thumbnails/blocks/accordion/icon.jpg',
      tags: ['icon', 'visual', 'custom']
    },
    {
      id: 'compact-accordion',
      name: 'Compact Accordion',
      description: 'Space-efficient accordion with reduced padding',
      thumbnail: '/thumbnails/blocks/accordion/compact.jpg',
      tags: ['compact', 'small', 'tight', 'efficient']
    },
    {
      id: 'rounded-accordion',
      name: 'Rounded Accordion',
      description: 'Accordion with rounded corners and subtle shadows',
      thumbnail: '/thumbnails/blocks/accordion/rounded.jpg',
      tags: ['rounded', 'soft', 'shadow']
    }
  ]
};

export default accordionMetadata;
