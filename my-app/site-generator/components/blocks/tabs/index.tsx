import React from 'react';
import { TabsComponent, TabsProps } from './types';
import { tabsMetadata } from './metadata';
import HorizontalTabs from './variants/horizontal';
import VerticalTabs from './variants/vertical';
import UnderlinedTabs from './variants/underlined';
import PillTabs from './variants/pill';
import BoxedTabs from './variants/boxed';
import IconTabs from './variants/icon';
import ResponsiveTabs from './variants/responsive';

/**
 * Tabs Block Component
 * 
 * A set of panels organized into tab sections with interactive navigation.
 * This component provides a unified API for all tabs variants.
 */
const Tabs: TabsComponent = ({
  items,
  defaultIndex = 0,
  activeIndex,
  onChange,
  orientation = 'horizontal',
  variant = 'default',
  fullWidth = false,
  align = 'start',
  centered = false,
  equalHeight = false,
  className,
  tabListClassName,
  tabPanelClassName,
  ...props
}) => {
  // Choose the appropriate implementation based on orientation
  if (orientation === 'vertical') {
    return (
      <VerticalTabs
        items={items}
        defaultIndex={defaultIndex}
        activeIndex={activeIndex}
        onChange={onChange}
        variant={variant}
        fullWidth={fullWidth}
        equalHeight={equalHeight}
        className={className}
        tabListClassName={tabListClassName}
        tabPanelClassName={tabPanelClassName}
        {...props}
      />
    );
  }
  
  // Default to horizontal tabs
  return (
    <HorizontalTabs
      items={items}
      defaultIndex={defaultIndex}
      activeIndex={activeIndex}
      onChange={onChange}
      variant={variant}
      fullWidth={fullWidth}
      align={align}
      centered={centered}
      equalHeight={equalHeight}
      className={className}
      tabListClassName={tabListClassName}
      tabPanelClassName={tabPanelClassName}
      {...props}
    />
  );
};

/**
 * Horizontal Tabs Variant
 * 
 * Standard horizontal tabs with content displayed below
 */
Tabs.Horizontal = HorizontalTabs;

/**
 * Vertical Tabs Variant
 * 
 * Tabs displayed vertically on the left with content on the right
 */
Tabs.Vertical = VerticalTabs;

/**
 * Underlined Tabs Variant
 * 
 * Minimalist tabs with an underline indicator
 */
Tabs.Underlined = UnderlinedTabs;

/**
 * Pill Tabs Variant
 * 
 * Tabs with pill-shaped backgrounds for a more distinct appearance
 */
Tabs.Pill = PillTabs;

/**
 * Boxed Tabs Variant
 * 
 * Tabbed interface with each tab having a boxed appearance
 */
Tabs.Boxed = BoxedTabs;

/**
 * Icon Tabs Variant
 * 
 * Tabs with icons for more visual navigation
 */
Tabs.Icon = IconTabs;

/**
 * Responsive Tabs Variant
 * 
 * Tabs that automatically adjust to available space on different devices
 */
Tabs.Responsive = ResponsiveTabs;

// Attach metadata to the component for the registry system
Tabs.metadata = tabsMetadata;

export default Tabs;
