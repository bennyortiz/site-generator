import { SectionConfig } from '../types/config';

/**
 * Component Registry
 * 
 * This module maps configuration section types to React components.
 * It supports multiple variants for each section type and provides
 * utilities for resolving the appropriate component at generation time.
 */

// Type for the component map
type ComponentMap = {
  [key: string]: {
    component: React.ComponentType<any>;
    variants: {
      [key: string]: React.ComponentType<any>;
    };
  };
};

/**
 * Component registry object
 * 
 * This will be populated as section components are registered.
 * Each section type (hero, services, etc.) maps to a component and its variants.
 */
const componentRegistry: ComponentMap = {};

/**
 * Register a section component and its variants
 * 
 * @param type The section type (e.g., 'hero', 'services')
 * @param defaultComponent The default component for this section type
 * @param variants An object mapping variant names to components
 */
export function registerComponent(
  type: string,
  defaultComponent: React.ComponentType<any>,
  variants: { [key: string]: React.ComponentType<any> } = {}
) {
  componentRegistry[type] = {
    component: defaultComponent,
    variants,
  };
}

/**
 * Get the appropriate component for a section config
 * 
 * @param section The section configuration
 * @returns The React component for the section, or null if not found
 */
export function getComponentForSection(section: SectionConfig): React.ComponentType<any> | null {
  const sectionType = componentRegistry[section.type];
  
  if (!sectionType) {
    console.warn(`Component not found for section type: ${section.type}`);
    return null;
  }
  
  // If a variant is specified and exists, use it
  if (section.variant && sectionType.variants[section.variant]) {
    return sectionType.variants[section.variant];
  }
  
  // Otherwise use the default component
  return sectionType.component;
}

/**
 * Check if a section type is registered
 * 
 * @param type The section type to check
 * @returns Whether the section type is registered
 */
export function isSectionTypeRegistered(type: string): boolean {
  return !!componentRegistry[type];
}

/**
 * Check if a variant is registered for a section type
 * 
 * @param type The section type
 * @param variant The variant name
 * @returns Whether the variant is registered for the section type
 */
export function isVariantRegistered(type: string, variant: string): boolean {
  return !!(componentRegistry[type]?.variants[variant]);
}

/**
 * Get all registered section types
 * 
 * @returns Array of registered section types
 */
export function getRegisteredSectionTypes(): string[] {
  return Object.keys(componentRegistry);
}

/**
 * Get all registered variants for a section type
 * 
 * @param type The section type
 * @returns Array of registered variant names for the section type
 */
export function getRegisteredVariants(type: string): string[] {
  if (!componentRegistry[type]) {
    return [];
  }
  
  return Object.keys(componentRegistry[type].variants);
}

/**
 * Get the entire component registry
 * 
 * @returns The component registry object
 */
export function getComponentRegistry(): ComponentMap {
  return { ...componentRegistry };
}

export default componentRegistry;
