import { SectionConfig } from '../types/config';

/**
 * Component Hierarchy:
 * 1. Sections (large, full-width page segments) - e.g., Hero, Features, FAQ, Pricing
 * 2. Blocks (medium-sized, reusable content containers) - e.g., Card, Accordion, TestimonialCard
 * 3. Elements (atomic UI components) - e.g., Button, Badge, Avatar
 */

/**
 * Component metadata with descriptive information
 */
export interface ComponentMetadata {
  /**
   * Component type: 'section', 'block', or 'element'
   */
  type: 'section' | 'block' | 'element';
  
  /**
   * Component identifier
   */
  name: string;
  
  /**
   * Human-readable description
   */
  description: string;
  
  /**
   * Available variants with detailed information
   */
  variants: VariantMetadata[];
  
  /**
   * Default variant ID
   */
  defaultVariant: string;
  
  /**
   * What page types this component works well with
   */
  compatibleWith?: string[];
  
  /**
   * Additional component-specific metadata
   */
  [key: string]: any;
}

/**
 * Variant metadata with descriptive information
 */
export interface VariantMetadata {
  /**
   * Variant identifier - descriptive and self-explanatory
   */
  id: string;
  
  /**
   * Human-readable name
   */
  name: string;
  
  /**
   * Detailed description of the variant
   */
  description: string;
  
  /**
   * Path to the thumbnail preview image
   */
  thumbnail?: string;
  
  /**
   * Search/filter tags
   */
  tags?: string[];
  
  /**
   * Additional variant-specific metadata
   */
  [key: string]: any;
}

/**
 * Component map with metadata
 */
type EnhancedComponentMap = {
  [key: string]: {
    component: React.ComponentType<any>;
    metadata: ComponentMetadata;
    variants: {
      [key: string]: React.ComponentType<any>;
    };
  };
};

/**
 * Enhanced component registry
 */
const enhancedComponentRegistry: EnhancedComponentMap = {};

/**
 * Register a component with detailed metadata
 * 
 * @param component The default component
 * @param metadata Component metadata
 * @param variants Map of variant IDs to variant components
 */
export function registerEnhancedComponent(
  component: React.ComponentType<any>,
  metadata: ComponentMetadata,
  variants: { [key: string]: React.ComponentType<any> } = {}
): void {
  // Validate metadata
  if (!metadata.name) {
    throw new Error('Component name is required');
  }
  
  if (!metadata.variants || metadata.variants.length === 0) {
    throw new Error('At least one variant must be defined');
  }
  
  if (!metadata.defaultVariant) {
    throw new Error('Default variant must be specified');
  }
  
  // Check if all variant components are provided
  const missingVariants = metadata.variants
    .map(v => v.id)
    .filter(id => !variants[id] && id !== 'default');
  
  if (missingVariants.length > 0) {
    throw new Error(`Missing variant components for: ${missingVariants.join(', ')}`);
  }
  
  // Add default component if not explicitly provided in variants
  const allVariants = { ...variants };
  if (!allVariants['default']) {
    allVariants['default'] = component;
  }
  
  enhancedComponentRegistry[metadata.name] = {
    component,
    metadata,
    variants: allVariants,
  };
  
  console.log(`Registered component: ${metadata.name} with ${metadata.variants.length} variants`);
}

/**
 * Get component for a section config
 * 
 * @param section Section configuration
 * @returns The appropriate component or null if not found
 */
export function getEnhancedComponentForSection(
  section: SectionConfig
): React.ComponentType<any> | null {
  const componentEntry = enhancedComponentRegistry[section.type];
  
  if (!componentEntry) {
    console.warn(`Component not found for section type: ${section.type}`);
    return null;
  }
  
  // If a variant is specified and exists, use it
  if (section.variant && componentEntry.variants[section.variant]) {
    return componentEntry.variants[section.variant];
  }
  
  // If variant specified but not found, log warning and use default
  if (section.variant && !componentEntry.variants[section.variant]) {
    console.warn(
      `Variant "${section.variant}" not found for component "${section.type}". Using default.`
    );
  }
  
  // Use the default variant specified in metadata
  const defaultVariantId = componentEntry.metadata.defaultVariant;
  return componentEntry.variants[defaultVariantId] || componentEntry.component;
}

/**
 * Get all registered component types
 * 
 * @returns Array of registered component names
 */
export function getRegisteredComponentTypes(): string[] {
  return Object.keys(enhancedComponentRegistry);
}

/**
 * Get metadata for a component
 * 
 * @param type Component type/name
 * @returns Component metadata or null if not found
 */
export function getComponentMetadata(type: string): ComponentMetadata | null {
  return enhancedComponentRegistry[type]?.metadata || null;
}

/**
 * Get variants for a component
 * 
 * @param type Component type/name
 * @returns Array of variant metadata or empty array if component not found
 */
export function getComponentVariants(type: string): VariantMetadata[] {
  return enhancedComponentRegistry[type]?.metadata.variants || [];
}

/**
 * Get component by type and variant
 * 
 * @param type Component type/name
 * @param variantId Variant ID
 * @returns Component or null if not found
 */
export function getComponentByVariant(
  type: string,
  variantId: string
): React.ComponentType<any> | null {
  const componentEntry = enhancedComponentRegistry[type];
  if (!componentEntry) return null;
  
  return componentEntry.variants[variantId] || null;
}

/**
 * Get components by category
 * 
 * @param category Component category ('section', 'block', or 'element')
 * @returns Object mapping component names to their metadata
 */
export function getComponentsByCategory(
  category: 'section' | 'block' | 'element'
): Record<string, ComponentMetadata> {
  return Object.entries(enhancedComponentRegistry)
    .filter(([_, entry]) => entry.metadata.type === category)
    .reduce((acc, [name, entry]) => {
      acc[name] = entry.metadata;
      return acc;
    }, {} as Record<string, ComponentMetadata>);
}

/**
 * Search components by tag
 * 
 * @param tag Tag to search for
 * @returns Components with variants that match the tag
 */
export function searchComponentsByTag(
  tag: string
): Record<string, VariantMetadata[]> {
  const results: Record<string, VariantMetadata[]> = {};
  
  for (const [name, entry] of Object.entries(enhancedComponentRegistry)) {
    const matchingVariants = entry.metadata.variants.filter(
      variant => variant.tags?.includes(tag)
    );
    
    if (matchingVariants.length > 0) {
      results[name] = matchingVariants;
    }
  }
  
  return results;
}

export default enhancedComponentRegistry;
