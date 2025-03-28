import { ComponentMetadata } from '../../../engine/enhanced-component-registry';

/**
 * Metadata for the Hero section component and its variants
 */
export const heroMetadata: ComponentMetadata = {
  type: 'section',
  name: 'hero',
  description: 'A hero section that appears at the top of a page to create a strong visual impact',
  defaultVariant: 'centered-content-with-background',
  compatibleWith: ['landing-page', 'about-page', 'services-page', 'contact-page'],
  variants: [
    {
      id: 'centered-content-with-background',
      name: 'Centered Content with Background',
      description: 'Content centered with a full-width background image and overlay',
      thumbnail: '/thumbnails/sections/hero/centered-bg.jpg',
      tags: ['centered', 'background-image', 'overlay', 'fullscreen']
    },
    {
      id: 'image-left-content-right',
      name: 'Image Left, Content Right',
      description: 'Split layout with image on left, content and CTA on right',
      thumbnail: '/thumbnails/sections/hero/split-left.jpg',
      tags: ['split', 'image', 'asymmetric', 'two-column']
    },
    {
      id: 'content-left-image-right',
      name: 'Content Left, Image Right',
      description: 'Split layout with content and CTA on left, image on right',
      thumbnail: '/thumbnails/sections/hero/split-right.jpg',
      tags: ['split', 'image', 'asymmetric', 'two-column']
    },
    {
      id: 'minimal-header-only',
      name: 'Minimal Header Only',
      description: 'Simple hero with just heading and subheading',
      thumbnail: '/thumbnails/sections/hero/minimal.jpg',
      tags: ['minimal', 'simple', 'text-only']
    },
    {
      id: 'gradient-background-centered-cta',
      name: 'Gradient Background with Centered CTA',
      description: 'Content centered on a gradient background with prominent call-to-action',
      thumbnail: '/thumbnails/sections/hero/gradient-cta.jpg',
      tags: ['gradient', 'centered', 'cta-focused']
    },
    {
      id: 'fullscreen-video-with-overlay',
      name: 'Fullscreen Video with Overlay',
      description: 'Fullscreen background video with text overlay',
      thumbnail: '/thumbnails/sections/hero/video-bg.jpg',
      tags: ['video', 'fullscreen', 'overlay', 'dynamic']
    }
  ]
};

export default heroMetadata;
