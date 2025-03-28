import { ComponentMetadata, registerEnhancedComponent } from './enhanced-component-registry';
import { createVariantMapFromComponent } from '../utils/component-factory';

/**
 * Auto-Discovery System for Components
 * 
 * This module provides functionality to automatically discover and register
 * components based on standardized folder structure and naming conventions.
 */

// Map of section types to variant mappings
const SECTION_VARIANT_MAPS: Record<string, Record<string, string>> = {
  'hero': {
    'centered-content-with-background': 'Centered',
    'image-left-content-right': 'Split',
    'content-left-image-right': 'Split',
    'minimal-header-only': 'Minimal',
    'gradient-background-centered-cta': 'Centered',
    'fullscreen-video-with-overlay': 'FullscreenVideo'
  },
  'features': {
    'three-column-grid-features': 'Grid',
    'alternating-image-features': 'Alternating',
    'centered-showcase-features': 'Centered',
    'icon-focused-grid-features': 'IconGrid',
    'card-based-features': 'CardBased',
    'tabbed-features-showcase': 'TabbedShowcase',
    'numbered-features-list': 'NumberedList'
  },
  'testimonials': {
    'testimonial-grid-layout': 'Grid',
    'testimonial-carousel': 'Carousel',
    'single-testimonial-spotlight': 'Spotlight',
    'quote-focused-testimonials': 'Quotes',
    'company-logos-testimonials': 'CompanyLogos',
    'video-testimonials': 'Video',
    'rating-focused-testimonials': 'RatingFocused'
  }
};

// Map of block types to variant mappings
const BLOCK_VARIANT_MAPS: Record<string, Record<string, string>> = {
  'accordion': {
    'simple-accordion': 'Simple',
    'bordered-accordion': 'Bordered',
    'faq-accordion': 'FAQ',
    'separated-accordion': 'Separated',
    'icon-accordion': 'Icon',
    'compact-accordion': 'Compact',
    'rounded-accordion': 'Rounded'
  },
  'card': {
    'feature-card-with-icon': 'Feature',
    'pricing-card-with-features-list': 'Pricing',
    'testimonial-card-with-avatar': 'Testimonial',
    'profile-card-with-social-links': 'Profile',
    'preview-card-with-image': 'Preview',
    'interactive-card-with-hover-effect': 'Interactive',
    'horizontal-card-with-image': 'Horizontal'
  },
  'tabs': {
    'horizontal-tabs': 'Horizontal',
    'vertical-tabs': 'Vertical',
    'underlined-tabs': 'Underlined',
    'pill-tabs': 'Pill',
    'boxed-tabs': 'Boxed',
    'icon-tabs': 'Icon',
    'responsive-tabs': 'Responsive',
    'tabbed': 'Horizontal' // Map 'tabbed' variant to the Horizontal implementation
  }
};

// Map of element types to variant mappings
const ELEMENT_VARIANT_MAPS: Record<string, Record<string, string>> = {
  'button': {
    'primary-button': 'Primary',
    'secondary-button': 'Secondary',
    'text-button': 'Text',
    'icon-button': 'Icon',
    'outline-button': 'Outline',
    'text-button-with-icon': 'TextWithIcon',
    'icon-only-button': 'Icon',
    'cta-button-with-arrow': 'CTA',
    'full-width-button': 'FullWidth'
  }
};

/**
 * Auto-register a section component
 * 
 * @param componentName Section name (e.g., 'hero', 'features')
 * @param component Component module with variant properties
 */
export function autoRegisterSection(componentName: string, component: any): void {
  // Skip registration if component doesn't have the required properties
  if (!component || !component.metadata) {
    console.warn(`Cannot auto-register section "${componentName}": Missing metadata`);
    return;
  }
  
  // Get the variant mapping for this section type
  const variantMap = SECTION_VARIANT_MAPS[componentName];
  if (!variantMap) {
    console.warn(`No variant mapping defined for section type: ${componentName}`);
    return;
  }
  
  // Create a variant map from the component's properties
  const variants = createVariantMapFromComponent(component, variantMap);
  
  // Check for missing variants
  const missingVariants = component.metadata.variants
    .map((v: any) => v.id)
    .filter((id: string) => !variants[id]);
  
  if (missingVariants.length > 0) {
    console.warn(`Section "${componentName}" is missing implementations for variants: ${missingVariants.join(', ')}`);
  }
  
  // Register the component with the enhanced registry
  registerEnhancedComponent(component, component.metadata, variants);
  console.log(`Auto-registered section: ${componentName} with ${Object.keys(variants).length} variants`);
}

/**
 * Auto-register a block component
 * 
 * @param componentName Block name (e.g., 'accordion', 'card')
 * @param component Component module with variant properties
 */
export function autoRegisterBlock(componentName: string, component: any): void {
  // Skip registration if component doesn't have the required properties
  if (!component || !component.metadata) {
    console.warn(`Cannot auto-register block "${componentName}": Missing metadata`);
    return;
  }
  
  // Get the variant mapping for this block type
  const variantMap = BLOCK_VARIANT_MAPS[componentName];
  if (!variantMap) {
    console.warn(`No variant mapping defined for block type: ${componentName}`);
    return;
  }
  
  // Create a variant map from the component's properties
  const variants = createVariantMapFromComponent(component, variantMap);
  
  // Register the component with the enhanced registry
  registerEnhancedComponent(component, component.metadata, variants);
  console.log(`Auto-registered block: ${componentName} with ${Object.keys(variants).length} variants`);
}

/**
 * Auto-register an element component
 * 
 * @param componentName Element name (e.g., 'button', 'icon')
 * @param component Component module with variant properties
 */
export function autoRegisterElement(componentName: string, component: any): void {
  // Skip registration if component doesn't have the required properties
  if (!component || !component.metadata) {
    console.warn(`Cannot auto-register element "${componentName}": Missing metadata`);
    return;
  }
  
  // Get the variant mapping for this element type
  const variantMap = ELEMENT_VARIANT_MAPS[componentName];
  if (!variantMap) {
    console.warn(`No variant mapping defined for element type: ${componentName}`);
    return;
  }
  
  // Create a variant map from the component's properties
  const variants = createVariantMapFromComponent(component, variantMap);
  
  // Register the component with the enhanced registry
  registerEnhancedComponent(component, component.metadata, variants);
  console.log(`Auto-registered element: ${componentName} with ${Object.keys(variants).length} variants`);
}

/**
 * Initialize the auto-discovery system
 * 
 * This function scans component directories and registers components
 * based on their folder structure and metadata.
 */
export function initializeAutoDiscovery(): void {
  console.log('Initializing component auto-discovery...');
  
  // In a full implementation, we would:
  // 1. Scan the sections, blocks, and elements directories
  // 2. For each component folder, import its index.ts and metadata.ts
  // 3. Auto-register the component based on its type
  
  // For now, we'll implement a partial solution that imports
  // known components and registers them automatically
  
  // Import and register sections
  try {
    const Hero = require('../components/sections/hero').default;
    const Features = require('../components/sections/features').default;
    const Testimonials = require('../components/sections/testimonials').default;
    
    autoRegisterSection('hero', Hero);
    autoRegisterSection('features', Features);
    autoRegisterSection('testimonials', Testimonials);
  } catch (error) {
    console.error('Error auto-registering sections:', error);
  }
  
  // Import and register blocks
  try {
    const Accordion = require('../components/blocks/accordion').default;
    const Card = require('../components/blocks/card').default;
    const Tabs = require('../components/blocks/tabs').default;
    
    autoRegisterBlock('accordion', Accordion);
    autoRegisterBlock('card', Card);
    autoRegisterBlock('tabs', Tabs);
  } catch (error) {
    console.error('Error auto-registering blocks:', error);
  }
  
  // Import and register elements
  try {
    const Button = require('../components/elements/button').default;
    
    autoRegisterElement('button', Button);
  } catch (error) {
    console.error('Error auto-registering elements:', error);
  }
  
  console.log('Component auto-discovery complete');
}

/**
 * In a full implementation, we might add these functions:
 * 
 * - scanComponentDirectory(path: string, type: 'section' | 'block' | 'element'): Promise<void>
 * - getComponentFilesFromDirectory(path: string): Promise<string[]>
 * - importComponentFromPath(path: string): Promise<any>
 */

export default {
  initializeAutoDiscovery,
  autoRegisterSection,
  autoRegisterBlock,
  autoRegisterElement
};
