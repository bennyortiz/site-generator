import { ComponentProps } from "react";

/**
 * Single accordion item properties
 */
export interface AccordionItemProps {
  /**
   * The title or header of the accordion item
   */
  title: React.ReactNode;
  
  /**
   * Content inside the accordion item
   */
  content: React.ReactNode;
  
  /**
   * Whether this item is open by default
   */
  defaultOpen?: boolean;
  
  /**
   * Optional class name for the item
   */
  className?: string;
  
  /**
   * Optional ID for the item
   */
  id?: string;
  
  /**
   * Optional icon to display in the header
   */
  icon?: React.ReactNode;
  
  /**
   * Optional badge to display in the header
   */
  badge?: React.ReactNode;
  
  /**
   * Disable this accordion item
   */
  disabled?: boolean;
}

/**
 * Accordion properties
 */
export interface AccordionProps {
  /**
   * Array of accordion items
   */
  items: AccordionItemProps[];
  
  /**
   * Whether multiple items can be open at once
   */
  type?: 'single' | 'multiple';
  
  /**
   * Default value for the open item(s)
   * For 'single' type, this should be a string
   * For 'multiple' type, this should be an array of strings
   */
  defaultValue?: string | string[];
  
  /**
   * Whether the accordion has a border around it
   */
  appearance?: 'simple' | 'bordered' | 'separated';
  
  /**
   * Optional additional class name
   */
  className?: string;
  
  /**
   * Whether the accordion is compact (less padding)
   */
  compact?: boolean;
  
  /**
   * Optional icon to show when item is collapsed
   */
  collapsedIcon?: React.ReactNode;
  
  /**
   * Optional icon to show when item is expanded
   */
  expandedIcon?: React.ReactNode;
  
  /**
   * Optional custom styles
   */
  style?: React.CSSProperties;
  
  /**
   * Additional HTML attributes
   */
  [key: string]: any;
  
  /**
   * React children
   */
  children?: React.ReactNode;
}

/**
 * Accordion Component with Variant Names
 */
export interface AccordionComponent extends React.FC<AccordionProps> {
  Simple: React.FC<AccordionProps>;
  Bordered: React.FC<AccordionProps>;
  FAQ: React.FC<AccordionProps>;
  Separated: React.FC<AccordionProps>;
  Icon: React.FC<AccordionProps>;
  Compact: React.FC<AccordionProps>;
  Rounded: React.FC<AccordionProps>;
  metadata?: any; // Allow attaching metadata for the registry
}
