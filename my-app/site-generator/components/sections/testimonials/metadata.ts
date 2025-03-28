import { ComponentMetadata } from '../../../engine/enhanced-component-registry';

/**
 * Metadata for the Testimonials section component and its variants
 */
export const testimonialsMetadata: ComponentMetadata = {
  type: 'section',
  name: 'testimonials',
  description: 'A section to showcase customer testimonials, reviews, and social proof',
  defaultVariant: 'testimonial-grid-layout',
  compatibleWith: ['homepage', 'about', 'services', 'product'],
  variants: [
    {
      id: 'testimonial-grid-layout',
      name: 'Testimonial Grid',
      description: 'A responsive grid layout of testimonial cards with avatars and quotes',
      thumbnail: '/thumbnails/sections/testimonials/grid.jpg',
      tags: ['grid', 'cards', 'multiple', 'responsive']
    },
    {
      id: 'testimonial-carousel',
      name: 'Testimonial Carousel',
      description: 'A carousel slider that cycles through testimonials one at a time',
      thumbnail: '/thumbnails/sections/testimonials/carousel.jpg',
      tags: ['slider', 'carousel', 'animated', 'interactive']
    },
    {
      id: 'single-testimonial-spotlight',
      name: 'Single Testimonial Spotlight',
      description: 'A large, featured testimonial with prominent quote and imagery',
      thumbnail: '/thumbnails/sections/testimonials/spotlight.jpg',
      tags: ['featured', 'spotlight', 'large', 'focus']
    },
    {
      id: 'quote-focused-testimonials',
      name: 'Quote-Focused Testimonials',
      description: 'Minimalist design focusing on the quotes with subtle attribution',
      thumbnail: '/thumbnails/sections/testimonials/quotes.jpg',
      tags: ['quotes', 'minimal', 'text-focused', 'clean']
    },
    {
      id: 'company-logos-testimonials',
      name: 'Company Logos with Testimonials',
      description: 'Testimonials with prominent company logos for social proof',
      thumbnail: '/thumbnails/sections/testimonials/logos.jpg',
      tags: ['logos', 'companies', 'social-proof', 'brands']
    },
    {
      id: 'video-testimonials',
      name: 'Video Testimonials',
      description: 'Grid or carousel of video testimonials with thumbnails and playback',
      thumbnail: '/thumbnails/sections/testimonials/video.jpg',
      tags: ['video', 'multimedia', 'interactive', 'engaging']
    },
    {
      id: 'rating-focused-testimonials',
      name: 'Rating-Focused Testimonials',
      description: 'Testimonials with prominent star ratings and review metrics',
      thumbnail: '/thumbnails/sections/testimonials/ratings.jpg',
      tags: ['ratings', 'stars', 'metrics', 'scores']
    }
  ]
};

export default testimonialsMetadata;
