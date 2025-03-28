import { ComponentMetadata } from '../../../engine/enhanced-component-registry';

/**
 * Metadata for the Button element component and its variants
 */
export const buttonMetadata: ComponentMetadata = {
  type: 'element',
  name: 'button',
  description: 'Interactive button element with various styles and states',
  defaultVariant: 'primary-button',
  compatibleWith: ['all'], // Buttons can be used anywhere
  variants: [
    {
      id: 'primary-button',
      name: 'Primary Button',
      description: 'Main action button with prominent styling',
      thumbnail: '/thumbnails/elements/button/primary.jpg',
      tags: ['cta', 'primary', 'action', 'prominent']
    },
    {
      id: 'secondary-button',
      name: 'Secondary Button',
      description: 'Alternative action button with less emphasis',
      thumbnail: '/thumbnails/elements/button/secondary.jpg',
      tags: ['secondary', 'alternative', 'action']
    },
    {
      id: 'outline-button',
      name: 'Outline Button',
      description: 'Button with outline styling and transparent background',
      thumbnail: '/thumbnails/elements/button/outline.jpg',
      tags: ['outline', 'border', 'subtle', 'light']
    },
    {
      id: 'text-button-with-icon',
      name: 'Text Button with Icon',
      description: 'Button that appears as text with an optional icon',
      thumbnail: '/thumbnails/elements/button/text-icon.jpg',
      tags: ['text', 'icon', 'minimal', 'link-like']
    },
    {
      id: 'icon-only-button',
      name: 'Icon Only Button',
      description: 'Compact button that displays only an icon',
      thumbnail: '/thumbnails/elements/button/icon-only.jpg',
      tags: ['icon', 'compact', 'square', 'toolbar']
    },
    {
      id: 'cta-button-with-arrow',
      name: 'CTA Button with Arrow',
      description: 'Call-to-action button with an arrow icon',
      thumbnail: '/thumbnails/elements/button/cta-arrow.jpg',
      tags: ['cta', 'arrow', 'action', 'primary', 'prominent']
    },
    {
      id: 'full-width-button',
      name: 'Full Width Button',
      description: 'Button that spans the entire width of its container',
      thumbnail: '/thumbnails/elements/button/full-width.jpg',
      tags: ['full-width', 'block', 'mobile', 'responsive']
    }
  ]
};

export default buttonMetadata;
