import { ComponentMetadata } from '../../engine/enhanced-component-registry';

/**
 * Metadata for the section component
 * 
 * This metadata is used by the component registry and studio UI
 * to display information about the component and its variants.
 */
export const sectionMetadata: ComponentMetadata = {
  type: 'section',
  name: 'new-section', // This would be changed to the actual section name (e.g., 'pricing', 'cta', etc.)
  description: 'A new section component with multiple variants',
  defaultVariant: 'default-variant',
  compatibleWith: ['landing-page', 'product-page'], // Page types this works well with
  variants: [
    {
      id: 'default-variant',
      name: 'Default Variant',
      description: 'The standard implementation of this section',
      thumbnail: '/thumbnails/sections/new-section/default.jpg', // Would need to be created
      tags: ['standard', 'default']
    },
    {
      id: 'alternative-variant',
      name: 'Alternative Variant',
      description: 'An alternative implementation with different layout',
      thumbnail: '/thumbnails/sections/new-section/alternative.jpg', // Would need to be created
      tags: ['alternative', 'special']
    },
    // Additional variants would be defined here
  ],
  
  // You can add additional metadata properties here as needed
  // These could include:
  // - component-specific configuration options
  // - customization restrictions
  // - default content
  // - examples
  examples: [
    {
      name: 'Basic Example',
      props: {
        heading: 'Section Heading',
        subheading: 'A brief description of this section and what it does'
      }
    },
    {
      name: 'With CTA',
      props: {
        heading: 'Section With Call to Action',
        subheading: 'This example includes a call-to-action button',
        cta: {
          label: 'Get Started',
          variant: 'primary'
        }
      }
    }
  ]
};
