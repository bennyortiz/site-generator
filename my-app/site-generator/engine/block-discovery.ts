import { ComponentMetadata, registerEnhancedComponent } from './enhanced-component-registry';
import Card from '../components/blocks/card';
import { CardComponent } from '../components/blocks/card/types';
import Accordion from '../components/blocks/accordion';
import { AccordionComponent } from '../components/blocks/accordion/types';
import Tabs from '../components/blocks/tabs';
import { TabsComponent } from '../components/blocks/tabs/types';

/**
 * Register a card block component with its variants
 * 
 * @param CardComponent The card component
 */
export function registerCardBlock(CardComponent: CardComponent): void {
  // Get the metadata from the component
  const metadata = CardComponent.metadata;
  
  if (!metadata) {
    throw new Error('Card component is missing metadata');
  }
  
  // Map variant IDs to components
  const variants: Record<string, React.ComponentType<any>> = {
    'feature-card-with-icon': CardComponent.Feature,
    'pricing-card-with-features-list': CardComponent.Pricing,
    'testimonial-card-with-avatar': CardComponent.Testimonial,
    'profile-card-with-social-links': CardComponent.Profile,
    'preview-card-with-image': CardComponent.Preview,
    'interactive-card-with-hover-effect': CardComponent.Interactive,
    'horizontal-card-with-image': CardComponent.Horizontal
  };
  
  // Register with the enhanced registry
  registerEnhancedComponent(CardComponent, metadata, variants);
}

/**
 * Register an accordion block component with its variants
 * 
 * @param AccordionComponent The accordion component
 */
export function registerAccordionBlock(AccordionComponent: AccordionComponent): void {
  // Get the metadata from the component
  const metadata = AccordionComponent.metadata;
  
  if (!metadata) {
    throw new Error('Accordion component is missing metadata');
  }
  
  // Map variant IDs to components
  const variants: Record<string, React.ComponentType<any>> = {
    'simple-accordion': AccordionComponent.Simple,
    'bordered-accordion': AccordionComponent.Bordered,
    'faq-accordion': AccordionComponent.FAQ,
    'separated-accordion': AccordionComponent.Separated,
    'icon-accordion': AccordionComponent.Icon,
    'compact-accordion': AccordionComponent.Compact,
    'rounded-accordion': AccordionComponent.Rounded
  };
  
  // Register with the enhanced registry
  registerEnhancedComponent(AccordionComponent, metadata, variants);
}

/**
 * Register a tabs block component with its variants
 * 
 * @param TabsComponent The tabs component
 */
export function registerTabsBlock(TabsComponent: TabsComponent): void {
  // Get the metadata from the component
  const metadata = TabsComponent.metadata;
  
  if (!metadata) {
    throw new Error('Tabs component is missing metadata');
  }
  
  // Map variant IDs to components
  const variants: Record<string, React.ComponentType<any>> = {
    'horizontal-tabs': TabsComponent.Horizontal,
    'vertical-tabs': TabsComponent.Vertical,
    'underlined-tabs': TabsComponent.Underlined,
    'pill-tabs': TabsComponent.Horizontal, // Reuse Horizontal with variant='pills'
    'boxed-tabs': TabsComponent.Horizontal, // Reuse Horizontal with variant='boxed'
    'icon-tabs': TabsComponent.Horizontal, // Reuse Horizontal with icons in items
    'responsive-tabs': TabsComponent.Horizontal, // Reuse Horizontal with responsive props
  };
  
  // Register with the enhanced registry
  registerEnhancedComponent(TabsComponent, metadata, variants);
}

/**
 * Initialize block discovery system
 * This should be called at application startup to register all block components
 */
export function initializeBlockDiscovery(): void {
  console.log("Initializing block discovery system...");
  
  // Register Card block
  registerCardBlock(Card);
  
  // Register Accordion block
  registerAccordionBlock(Accordion);
  
  // Register Tabs block
  registerTabsBlock(Tabs);
  
  // Additional blocks would be registered here
  // etc.
  
  console.log("Block discovery initialization complete");
}

/**
 * Get information about all registered blocks
 * 
 * This is useful for debugging and diagnostics
 */
export function getBlocksInfo(): Record<string, any> {
  // This would provide information about all registered blocks
  return {
    blocks: [
      {
        name: 'card',
        variants: [
          'feature-card-with-icon',
          'pricing-card-with-features-list',
          'testimonial-card-with-avatar',
          'profile-card-with-social-links',
          'preview-card-with-image',
          'interactive-card-with-hover-effect',
          'horizontal-card-with-image'
        ]
      },
      {
        name: 'accordion',
        variants: [
          'simple-accordion',
          'bordered-accordion',
          'faq-accordion',
          'separated-accordion',
          'icon-accordion',
          'compact-accordion',
          'rounded-accordion'
        ]
      },
      {
        name: 'tabs',
        variants: [
          'horizontal-tabs',
          'vertical-tabs',
          'underlined-tabs',
          'pill-tabs',
          'boxed-tabs',
          'icon-tabs',
          'responsive-tabs'
        ]
      }
      // Add more blocks as they are registered
    ]
  };
}

export default {
  initializeBlockDiscovery,
  registerCardBlock,
  registerAccordionBlock,
  registerTabsBlock,
  getBlocksInfo
};
