import { ComponentMetadata, VariantMetadata } from '../engine/enhanced-component-registry';
import React from 'react';

/**
 * Interface for a component that supports variants
 */
export interface ComponentWithVariants<P = any> extends React.FC<P> {
  variants: Record<string, React.ComponentType<P>>;
  metadata: ComponentMetadata;
  defaultVariant: string;
}

/**
 * Options for creating a component with variants
 */
export interface ComponentFactoryOptions<P> {
  // Default implementation
  defaultComponent: React.FC<P>;
  
  // Component metadata
  metadata: ComponentMetadata;
  
  // Variant implementations
  variants: Record<string, React.FC<P>>;
  
  // Optional default variant ID (falls back to metadata.defaultVariant)
  defaultVariantId?: string;
}

/**
 * Factory function to create a component with variants
 * 
 * This standardizes how components with variants are created and makes
 * it easier to register them with the component registry.
 * 
 * @param options Component factory options
 * @returns A component with variants that can be used directly or registered
 */
export function createComponentWithVariants<P>(
  options: ComponentFactoryOptions<P>
): ComponentWithVariants<P> {
  const { defaultComponent, metadata, variants, defaultVariantId } = options;
  
  // Create the main component function that selects the appropriate variant
  const Component: React.FC<P & { variant?: string }> = (props) => {
    const { variant, ...rest } = props as P & { variant?: string };
    
    // Use the specified variant, or default to the component's default variant
    if (variant && variants[variant]) {
      const VariantComponent = variants[variant];
      // Use type assertion to ensure TypeScript knows this is valid
      return React.createElement(VariantComponent as React.ComponentType<any>, rest as any);
    }
    
    // Fall back to default component
    return React.createElement(defaultComponent as React.ComponentType<any>, rest as any);
  };
  
  // Add variants and metadata
  (Component as ComponentWithVariants<P>).variants = variants;
  (Component as ComponentWithVariants<P>).metadata = metadata;
  (Component as ComponentWithVariants<P>).defaultVariant = defaultVariantId || metadata.defaultVariant;
  
  return Component as ComponentWithVariants<P>;
}

/**
 * Utility to validate variants against metadata
 * 
 * @param variants Record of variant implementations
 * @param metadata Component metadata containing variant definitions
 * @returns Array of missing variant IDs
 */
export function validateVariantsAgainstMetadata(
  variants: Record<string, React.ComponentType<any>>,
  metadata: ComponentMetadata
): string[] {
  const implementedVariantIds = Object.keys(variants);
  const definedVariantIds = metadata.variants.map(v => v.id);
  
  return definedVariantIds.filter(id => !implementedVariantIds.includes(id));
}

/**
 * Get variant metadata by ID
 * 
 * @param metadata Component metadata
 * @param variantId Variant ID to find
 * @returns Variant metadata or undefined if not found
 */
export function getVariantMetadataById(
  metadata: ComponentMetadata,
  variantId: string
): VariantMetadata | undefined {
  return metadata.variants.find(v => v.id === variantId);
}

/**
 * Create a variant map from component object with named exports
 * 
 * This makes it easier to create a variant map from a component with
 * statically defined variant components as properties.
 * 
 * @param component Component with variant properties
 * @param variantMap Mapping from variant IDs to component property names
 * @returns Record of variant IDs to component implementations
 */
export function createVariantMapFromComponent(
  component: Record<string, any>,
  variantMap: Record<string, string>
): Record<string, React.ComponentType<any>> {
  const variants: Record<string, React.ComponentType<any>> = {};
  
  for (const [variantId, propName] of Object.entries(variantMap)) {
    if (!component[propName]) {
      console.warn(`Variant component "${propName}" not found for variant ID "${variantId}"`);
      continue;
    }
    
    variants[variantId] = component[propName];
  }
  
  return variants;
}
