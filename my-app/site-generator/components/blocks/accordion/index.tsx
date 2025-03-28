import React from 'react';
import { AccordionComponent, AccordionProps } from './types';
import { accordionMetadata } from './metadata';
import SimpleAccordion from './variants/simple';
import BorderedAccordion from './variants/bordered';
import FAQAccordion from './variants/faq';

/**
 * Accordion Block Component
 * 
 * A vertically stacked set of interactive headings that reveal or hide associated content.
 * This component provides a unified API for all accordion variants.
 */
const Accordion: AccordionComponent = ({
  items,
  type = 'single',
  defaultValue,
  appearance = 'simple',
  className,
  compact = false,
  collapsedIcon,
  expandedIcon,
  ...props
}) => {
  // Default implementation uses Simple Accordion variant
  return (
    <SimpleAccordion
      items={items}
      type={type}
      defaultValue={defaultValue}
      appearance={appearance}
      className={className}
      compact={compact}
      collapsedIcon={collapsedIcon}
      expandedIcon={expandedIcon}
      {...props}
    />
  );
};

/**
 * Simple Accordion Variant
 * 
 * A clean accordion with minimal styling
 */
Accordion.Simple = SimpleAccordion;

/**
 * Bordered Accordion Variant
 * 
 * Accordion with borders around items for clear separation
 */
Accordion.Bordered = BorderedAccordion;

/**
 * FAQ Accordion Variant
 * 
 * Styled specifically for frequently asked questions with question mark icons
 */
Accordion.FAQ = FAQAccordion;

/**
 * Separated Accordion Variant
 * 
 * Accordion with items separated by space
 */
Accordion.Separated = (props: AccordionProps) => (
  <SimpleAccordion
    appearance="separated"
    {...props}
  />
);

/**
 * Icon Accordion Variant
 * 
 * Accordion with customizable icons for each item
 */
Accordion.Icon = (props: AccordionProps) => (
  <SimpleAccordion
    {...props}
  />
);

/**
 * Compact Accordion Variant
 * 
 * Space-efficient accordion with reduced padding
 */
Accordion.Compact = (props: AccordionProps) => (
  <SimpleAccordion
    compact={true}
    {...props}
  />
);

/**
 * Rounded Accordion Variant
 * 
 * Accordion with rounded corners
 */
Accordion.Rounded = (props: AccordionProps) => (
  <SimpleAccordion
    className="rounded-md overflow-hidden"
    {...props}
  />
);

// Attach metadata to the component for the registry system
Accordion.metadata = accordionMetadata;

export default Accordion;
