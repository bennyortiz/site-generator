import { ComponentMetadata } from '../../../engine/enhanced-component-registry';

/**
 * Metadata for the Tabs block component and its variants
 */
export const tabsMetadata: ComponentMetadata = {
  type: 'block',
  name: 'tabs',
  description: 'A set of panels organized into tab sections with interactive navigation',
  defaultVariant: 'horizontal-tabs',
  compatibleWith: ['features', 'pricing', 'faq', 'portfolio'],
  variants: [
    {
      id: 'horizontal-tabs',
      name: 'Horizontal Tabs',
      description: 'Standard horizontal tabs with content displayed below the tabs',
      thumbnail: '/thumbnails/blocks/tabs/horizontal.jpg',
      tags: ['horizontal', 'standard', 'default']
    },
    {
      id: 'vertical-tabs',
      name: 'Vertical Tabs',
      description: 'Tabs displayed vertically on the left with content on the right',
      thumbnail: '/thumbnails/blocks/tabs/vertical.jpg',
      tags: ['vertical', 'side', 'sidebar']
    },
    {
      id: 'underlined-tabs',
      name: 'Underlined Tabs',
      description: 'Minimalist tabs with an underline indicator for the active tab',
      thumbnail: '/thumbnails/blocks/tabs/underlined.jpg',
      tags: ['underlined', 'minimal', 'clean']
    },
    {
      id: 'pill-tabs',
      name: 'Pill Tabs',
      description: 'Tabs with pill-shaped backgrounds for a more distinct appearance',
      thumbnail: '/thumbnails/blocks/tabs/pill.jpg',
      tags: ['pill', 'rounded', 'button-like']
    },
    {
      id: 'boxed-tabs',
      name: 'Boxed Tabs',
      description: 'Tabbed interface with each tab having a boxed appearance',
      thumbnail: '/thumbnails/blocks/tabs/boxed.jpg',
      tags: ['boxed', 'bordered', 'contained']
    },
    {
      id: 'icon-tabs',
      name: 'Icon Tabs',
      description: 'Tabs with icons for more visual navigation',
      thumbnail: '/thumbnails/blocks/tabs/icon.jpg',
      tags: ['icon', 'visual', 'graphic']
    },
    {
      id: 'responsive-tabs',
      name: 'Responsive Tabs',
      description: 'Tabs that automatically adjust to available space on different devices',
      thumbnail: '/thumbnails/blocks/tabs/responsive.jpg',
      tags: ['responsive', 'adaptive', 'mobile-friendly']
    }
  ]
};

export default tabsMetadata;
