import { ComponentMetadata } from '../../../engine/enhanced-component-registry';

/**
 * Metadata for the Features section component and its variants
 */
export const featuresMetadata: ComponentMetadata = {
  type: 'section',
  name: 'features',
  description: 'A section to showcase features or benefits of a product or service',
  defaultVariant: 'three-column-grid-features',
  compatibleWith: ['homepage', 'product', 'services', 'about'],
  variants: [
    {
      id: 'three-column-grid-features',
      name: 'Three Column Grid',
      description: 'A simple three-column grid layout with icons for displaying multiple features',
      thumbnail: '/thumbnails/sections/features/grid.jpg',
      tags: ['grid', 'simple', 'icons', 'multiple']
    },
    {
      id: 'alternating-image-features',
      name: 'Alternating Image & Content',
      description: 'Features shown as alternating left and right sections with images',
      thumbnail: '/thumbnails/sections/features/alternating.jpg',
      tags: ['alternating', 'image', 'detailed', 'visual']
    },
    {
      id: 'centered-showcase-features',
      name: 'Centered Showcase',
      description: 'A centered layout with a main feature showcase and surrounding details',
      thumbnail: '/thumbnails/sections/features/centered.jpg',
      tags: ['centered', 'showcase', 'focus', 'detailed']
    },
    {
      id: 'icon-focused-grid-features',
      name: 'Icon Grid',
      description: 'A grid of features with prominent icons and minimal text',
      thumbnail: '/thumbnails/sections/features/icon-grid.jpg',
      tags: ['icon', 'minimal', 'grid', 'compact']
    },
    {
      id: 'card-based-features',
      name: 'Card-Based Features',
      description: 'Features displayed as individual cards in a grid layout',
      thumbnail: '/thumbnails/sections/features/cards.jpg',
      tags: ['cards', 'boxed', 'separated', 'clean']
    },
    {
      id: 'tabbed-features-showcase',
      name: 'Tabbed Features',
      description: 'Features organized into tabs for focused presentation',
      thumbnail: '/thumbnails/sections/features/tabbed.jpg',
      tags: ['tabs', 'interactive', 'organized', 'detailed']
    },
    {
      id: 'numbered-features-list',
      name: 'Numbered Features',
      description: 'A sequential list of features with numbers for step-by-step processes',
      thumbnail: '/thumbnails/sections/features/numbered.jpg',
      tags: ['numbered', 'steps', 'process', 'sequential']
    }
  ]
};

export default featuresMetadata;
