import React from 'react';
import { TabsProps } from '../types';
import HorizontalTabs from './horizontal';
import { cn } from '../../../../utils/cn';

/**
 * Underlined Tabs Variant
 * 
 * Minimalist tabs with an underline indicator for the active tab.
 */
export const UnderlinedTabs: React.FC<TabsProps> = (props) => {
  return (
    <HorizontalTabs
      variant="underlined"
      className={cn('border-none', props.className)}
      tabListClassName={cn('gap-6 border-b border-border/40', props.tabListClassName)}
      {...props}
    />
  );
};

export default UnderlinedTabs;
