import React from 'react';
import { SectionProps } from './types';
import { sectionMetadata } from './metadata';
import { createComponentWithVariants } from '../../utils/component-factory';

// Import all variant implementations
import DefaultVariant from './variants/default';
import AlternativeVariant from './variants/alternative';
// ... import other variants as needed

/**
 * Default Section Component
 * 
 * This component routes to the appropriate variant implementation
 * based on the variant prop or falls back to the default.
 */
const DefaultSectionComponent: React.FC<SectionProps> = (props) => {
  // If a specific variant is requested, render it
  if (props.variant) {
    // This is just a fallback - the createComponentWithVariants function
    // will handle actual variant selection when we create the final component
    return <DefaultVariant {...props} />;
  }
  
  // Otherwise, render the default variant
  return <DefaultVariant {...props} />;
};

// Create a component with variants using our factory
const Section = createComponentWithVariants({
  defaultComponent: DefaultSectionComponent,
  metadata: sectionMetadata,
  variants: {
    'default-variant': DefaultVariant,
    'alternative-variant': AlternativeVariant,
    // Add other variants here
  }
});

// Optionally, you can still provide direct access to variants for convenience
Section.Default = DefaultVariant;
Section.Alternative = AlternativeVariant;
// ... and so on

export default Section;
