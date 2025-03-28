import React from 'react';
import { AccordionProps } from '../types';
import SimpleAccordion from './simple';
import { cn } from '../../../../utils/cn';

/**
 * Bordered Accordion Variant
 * 
 * Accordion with borders around items for clear separation.
 */
export const BorderedAccordion: React.FC<AccordionProps> = ({
  items,
  className,
  ...props
}) => {
  return (
    <div className={cn('rounded-md border', className)}>
      <SimpleAccordion
        items={items}
        appearance="bordered"
        className="rounded-md overflow-hidden"
        {...props}
      />
    </div>
  );
};

export default BorderedAccordion;
