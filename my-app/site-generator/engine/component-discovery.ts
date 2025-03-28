import { ComponentMetadata, registerEnhancedComponent } from './enhanced-component-registry';
import Hero from '../components/sections/hero';
import Features from '../components/sections/features';
import Testimonials from '../components/sections/testimonials';

/**
 * Component Discovery System
 * 
 * This module provides functionality to automatically discover and register
 * components from the project's component directories.
 */

/**
 * Type for a component with variants
 */
interface ComponentWithVariants<P = any> extends React.FC<P> {
  Centered: React.FC<P>;
  Split: React.FC<P>;
  Minimal: React.FC<P>;
  [key: string]: React.FC<P> | any; // Allow for displayName and other properties
}

/**
 * Register a hero section component with its variants
 * 
 * @param HeroComponent The default hero component
 */
export function registerHeroSection(HeroComponent: ComponentWithVariants): void {
  // Define the metadata for the hero section
  const metadata: ComponentMetadata = {
    type: 'section',
    name: 'hero',
    description: 'A hero section that appears at the top of a page',
    defaultVariant: 'centered-content-with-background',
    compatibleWith: ['landing-page', 'about-page', 'services-page'],
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
        description: 'Hero section with a fullscreen video and overlay',
        thumbnail: '/thumbnails/sections/hero/fullscreen-video.jpg',
        tags: ['fullscreen', 'video', 'overlay']
      }
    ]
  };

  // Map variant IDs to components
  const variants: Record<string, React.ComponentType<any>> = {
    'centered-content-with-background': HeroComponent.Centered,
    'image-left-content-right': HeroComponent.Split,
    'content-left-image-right': HeroComponent.Split, // Can be the same component with props
    'minimal-header-only': HeroComponent.Minimal,
    'gradient-background-centered-cta': HeroComponent.Centered, // Can reuse with different props
    'fullscreen-video-with-overlay': HeroComponent.FullscreenVideo
  };

  // Register with the enhanced registry
  registerEnhancedComponent(HeroComponent, metadata, variants);
}

/**
 * Register a features section component with its variants
 * 
 * @param FeaturesComponent The default features component
 */
export function registerFeaturesSection(FeaturesComponent: any): void {
  // Use the metadata from the component
  const metadata = FeaturesComponent.metadata;
  
  if (!metadata) {
    throw new Error('Features component is missing metadata');
  }
  
  // Map variant IDs to components
  const variants: Record<string, React.ComponentType<any>> = {
    'three-column-grid-features': FeaturesComponent.Grid,
    'alternating-image-features': FeaturesComponent.Alternating,
    'centered-showcase-features': FeaturesComponent.Centered,
    'icon-focused-grid-features': FeaturesComponent.IconGrid,
    'card-based-features': FeaturesComponent.CardBased,
    'tabbed-features-showcase': FeaturesComponent.TabbedShowcase,
    'numbered-features-list': FeaturesComponent.NumberedList
  };

  // Register with the enhanced registry
  registerEnhancedComponent(FeaturesComponent, metadata, variants);
}

/**
 * Register a testimonials section component with its variants
 * 
 * @param TestimonialsComponent The default testimonials component
 */
export function registerTestimonialsSection(TestimonialsComponent: any): void {
  // Use the metadata from the component
  const metadata = TestimonialsComponent.metadata;
  
  if (!metadata) {
    throw new Error('Testimonials component is missing metadata');
  }
  
  // Map variant IDs to components
  const variants: Record<string, React.ComponentType<any>> = {
    'testimonial-grid-layout': TestimonialsComponent.Grid,
    'testimonial-carousel': TestimonialsComponent.Carousel,
    'single-testimonial-spotlight': TestimonialsComponent.Spotlight,
    'quote-focused-testimonials': TestimonialsComponent.Quotes,
    'company-logos-testimonials': TestimonialsComponent.CompanyLogos,
    'video-testimonials': TestimonialsComponent.Video,
    'rating-focused-testimonials': TestimonialsComponent.RatingFocused
  };

  // Register with the enhanced registry
  registerEnhancedComponent(TestimonialsComponent, metadata, variants);
}

/**
 * Register a FAQ section component with its variants
 * 
 * @param FAQComponent The default FAQ component
 */
export function registerFAQSection(FAQComponent: React.ComponentType<any>): void {
  const metadata: ComponentMetadata = {
    type: 'section',
    name: 'faq',
    description: 'A section for frequently asked questions',
    defaultVariant: 'simple-accordion-list',
    compatibleWith: ['landing-page', 'support-page', 'product-page'],
    variants: [
      {
        id: 'simple-accordion-list',
        name: 'Simple Accordion List',
        description: 'Questions and answers in a collapsible accordion format',
        thumbnail: '/thumbnails/sections/faq/simple-accordion.jpg',
        tags: ['accordion', 'collapsible', 'list']
      },
      {
        id: 'two-column-accordion-grid',
        name: 'Two Column Accordion Grid',
        description: 'Questions and answers in a two-column grid layout',
        thumbnail: '/thumbnails/sections/faq/two-column.jpg',
        tags: ['grid', 'accordion', 'two-column']
      },
      {
        id: 'categorized-questions-with-tabs',
        name: 'Categorized Questions with Tabs',
        description: 'Questions organized by category with tabbed navigation',
        thumbnail: '/thumbnails/sections/faq/categorized-tabs.jpg',
        tags: ['tabs', 'categories', 'organized']
      },
      {
        id: 'search-enabled-faq-list',
        name: 'Search-Enabled FAQ List',
        description: 'Questions with a search box for filtering',
        thumbnail: '/thumbnails/sections/faq/searchable.jpg',
        tags: ['search', 'filter', 'interactive']
      }
    ]
  };

  // Map would be filled with actual components in a real implementation
  const variants: Record<string, React.ComponentType<any>> = {};
  
  // Register with the enhanced registry (placeholder)
  // registerEnhancedComponent(FAQComponent, metadata, variants);
}

/**
 * Register a block-level component (like an accordion)
 * 
 * @param AccordionComponent The accordion component
 */
export function registerAccordionBlock(AccordionComponent: React.ComponentType<any>): void {
  const metadata: ComponentMetadata = {
    type: 'block',
    name: 'accordion',
    description: 'A collapsible content block for showing/hiding information',
    defaultVariant: 'simple-expansion-panel',
    variants: [
      {
        id: 'simple-expansion-panel',
        name: 'Simple Expansion Panel',
        description: 'Basic accordion with title and expandable content',
        thumbnail: '/thumbnails/blocks/accordion/simple.jpg',
        tags: ['collapsible', 'expandable', 'toggle']
      },
      {
        id: 'bordered-accordion-with-icon',
        name: 'Bordered Accordion with Icon',
        description: 'Accordion with border and toggle icon indicator',
        thumbnail: '/thumbnails/blocks/accordion/bordered.jpg',
        tags: ['bordered', 'icon', 'indicator']
      },
      {
        id: 'colored-header-accordion',
        name: 'Colored Header Accordion',
        description: 'Accordion with colored header background',
        thumbnail: '/thumbnails/blocks/accordion/colored.jpg',
        tags: ['colored', 'header', 'prominent']
      }
    ]
  };

  // Map would be filled with actual components in a real implementation
  const variants: Record<string, React.ComponentType<any>> = {};
  
  // Register with the enhanced registry (placeholder)
  // registerEnhancedComponent(AccordionComponent, metadata, variants);
}

/**
 * Initialize component discovery system
 * This would scan directories and automatically register components in a real implementation
 */
export function initializeComponentDiscovery(): void {
  console.log("Initializing component discovery system...");
  
  // In a real implementation, this would:
  // 1. Scan component directories (sections, blocks, elements)
  // 2. Import components and their metadata
  // 3. Register them with the enhanced registry
  
  // For now, we'll manually register components as they're imported elsewhere
}

/**
 * Helper to import components dynamically
 * 
 * @param path Path to the component module
 * @returns Promise resolving to the component and its metadata
 */
export async function importComponent(path: string): Promise<{
  component: React.ComponentType<any>;
  metadata?: ComponentMetadata;
}> {
  try {
    const module = await import(path);
    return {
      component: module.default,
      metadata: module.metadata
    };
  } catch (error) {
    console.error(`Failed to import component from path: ${path}`, error);
    throw error;
  }
}
