import { ComponentMetadata } from '../../../engine/enhanced-component-registry';

/**
 * Metadata for the Card block component and its variants
 */
export const cardMetadata: ComponentMetadata = {
  type: 'block',
  name: 'card',
  description: 'A versatile card component for displaying content in a contained format',
  defaultVariant: 'feature-card-with-icon',
  compatibleWith: ['features', 'pricing', 'testimonials', 'team', 'portfolio'],
  variants: [
    {
      id: 'feature-card-with-icon',
      name: 'Feature Card with Icon',
      description: 'Card designed to showcase a feature with an icon, title, and description',
      thumbnail: '/thumbnails/blocks/card/feature-icon.jpg',
      tags: ['feature', 'icon', 'product', 'service']
    },
    {
      id: 'pricing-card-with-features-list',
      name: 'Pricing Card with Features List',
      description: 'Card displaying a pricing plan with tier, price, and feature list',
      thumbnail: '/thumbnails/blocks/card/pricing.jpg',
      tags: ['pricing', 'plan', 'subscription', 'features']
    },
    {
      id: 'testimonial-card-with-avatar',
      name: 'Testimonial Card with Avatar',
      description: 'Card showcasing a customer testimonial with quote, avatar, and attribution',
      thumbnail: '/thumbnails/blocks/card/testimonial.jpg',
      tags: ['testimonial', 'quote', 'review', 'avatar']
    },
    {
      id: 'profile-card-with-social-links',
      name: 'Profile Card with Social Links',
      description: 'Card displaying a person profile with image, title, bio, and social links',
      thumbnail: '/thumbnails/blocks/card/profile.jpg',
      tags: ['profile', 'team', 'bio', 'social']
    },
    {
      id: 'preview-card-with-image',
      name: 'Preview Card with Image',
      description: 'Card previewing content with a prominent image, title, and brief description',
      thumbnail: '/thumbnails/blocks/card/preview.jpg',
      tags: ['preview', 'image', 'thumbnail', 'article']
    },
    {
      id: 'interactive-card-with-hover-effect',
      name: 'Interactive Card with Hover Effect',
      description: 'Clickable card with interactive hover effects and smooth transitions',
      thumbnail: '/thumbnails/blocks/card/interactive.jpg',
      tags: ['interactive', 'hover', 'animation', 'clickable']
    },
    {
      id: 'horizontal-card-with-image',
      name: 'Horizontal Card with Image',
      description: 'Card with a side-by-side layout featuring an image and content',
      thumbnail: '/thumbnails/blocks/card/horizontal.jpg',
      tags: ['horizontal', 'image', 'side-by-side', 'responsive']
    }
  ]
};

export default cardMetadata;
