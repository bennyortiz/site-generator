import { ComponentProps } from "react";

/**
 * Single tab item properties
 */
export interface TabItemProps {
  /**
   * The title or label of the tab
   */
  title: React.ReactNode;
  
  /**
   * Content inside the tab panel
   */
  content: React.ReactNode;
  
  /**
   * Optional icon to display with the tab title
   */
  icon?: React.ReactNode;
  
  /**
   * Optional badge to display with the tab title
   */
  badge?: React.ReactNode;
  
  /**
   * Optional class name for the tab
   */
  className?: string;
  
  /**
   * Optional ID for the tab
   */
  id?: string;
  
  /**
   * Disable this tab
   */
  disabled?: boolean;
}

/**
 * Tabs properties
 */
export interface TabsProps {
  /**
   * Array of tab items
   */
  items: TabItemProps[];
  
  /**
   * Default active tab index
   */
  defaultIndex?: number;
  
  /**
   * Optional controlled active tab index
   */
  activeIndex?: number;
  
  /**
   * Callback when tab changes
   */
  onChange?: (index: number) => void;
  
  /**
   * Tab orientation: horizontal or vertical
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * Visual style of the tabs
   */
  variant?: 'default' | 'underlined' | 'pills' | 'boxed';
  
  /**
   * Whether tabs should take full width of container
   */
  fullWidth?: boolean;
  
  /**
   * Tab content alignment for horizontal tabs
   */
  align?: 'start' | 'center' | 'end';
  
  /**
   * Whether tabs should be centered
   */
  centered?: boolean;
  
  /**
   * Whether tab panels should have equal height
   */
  equalHeight?: boolean;
  
  /**
   * Optional additional class name
   */
  className?: string;
  
  /**
   * Optional class name for the tab list
   */
  tabListClassName?: string;
  
  /**
   * Optional class name for the tab panels
   */
  tabPanelClassName?: string;
  
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
 * Tabs Component with Variant Names
 */
export interface TabsComponent extends React.FC<TabsProps> {
  Horizontal: React.FC<TabsProps>;
  Vertical: React.FC<TabsProps>;
  Underlined: React.FC<TabsProps>;
  Pill: React.FC<TabsProps>;
  Boxed: React.FC<TabsProps>;
  Icon: React.FC<TabsProps>;
  Responsive: React.FC<TabsProps>;
  metadata?: any; // Allow attaching metadata for the registry
}
