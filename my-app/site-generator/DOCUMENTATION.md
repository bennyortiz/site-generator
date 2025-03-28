# Site Generator Documentation

## Overview

The Site Generator is a tool for building production-ready, customizable Next.js sites through a visual interface. The tool follows a component-based architecture with modular sections, blocks, and elements that can be composed to create complete websites.

## Architecture

The system is organized into several key layers:

- **Engine**: Core functionality for component discovery, registration, and site generation
- **Components**: UI building blocks organized by complexity and purpose
- **Context**: Global state management and theme system
- **Configuration**: Site structure and content definitions
- **Studio**: The visual editor interface for creating and customizing sites

## Component Organization

Components are organized hierarchically by complexity:

1. **Elements**: Primitive UI components (buttons, inputs, etc.)
2. **Blocks**: Compound components made of multiple elements (cards, tabs, accordions)
3. **Sections**: Full page sections (hero, features, testimonials, etc.)
4. **Layout**: Page-level structure components

Each component category can include multiple variants to provide design flexibility while maintaining consistent behavior and props.

## The Studio Interface

The Studio provides a visual interface for creating and customizing websites. It includes:

### Modern UI (New)

The modern interface (`/studio/modernui`) features a split-view layout with:

- **Persistent Preview**: Real-time preview that stays visible during editing
- **Collapsible Sidebar**: Navigation with progress tracking
- **Responsive Testing**: Preview your site in different device sizes
- **Dark/Light Mode**: Toggle between light and dark interface themes

#### Key Components:

- `SplitView`: Resizable panel layout
- `ModernLayout`: The main layout component with preview and editor panels
- `StudioSidebar`: Navigation and progress tracking

### Classic UI (Original)

The original step-by-step wizard interface (`/studio`) with:

- **Step Indicator**: Shows current progress and allows jumping between steps
- **Device Preview**: Preview the site in different screen sizes
- **Focused Editing**: Dedicated view for each editing step

## Theming System

### Theme Structure

Themes are defined as presets with comprehensive settings for:

- **Colors**: Primary, secondary, accent, and semantic color palettes
- **Typography**: Font families, weights, sizes, and line heights
- **Spacing**: Consistent spacing scale
- **Borders & Shadows**: Border radius, widths, and box shadows

### Implementation

- `EnhancedThemeContext`: Provides theme state and functions
- `ThemePresets`: Pre-defined theme configurations
- CSS Variables: Themes are applied via CSS variables for efficient updates

## Component Variants

Components can have multiple variants that share a common interface but present different visual styles or layouts. For example:

- Hero section: Centered, Split, Minimal variants
- Card blocks: Feature, Testimonial variants
- Button elements: Primary, Secondary, Ghost variants

Each variant is defined in its own file within a `variants` directory, making it easy to add new variants without modifying existing code.

## Creating New Components

To create a new component:

1. Add the component in the appropriate directory (elements, blocks, or sections)
2. Create a `variants` directory for different styles
3. Add a `metadata.ts` file to define the component's properties and configuration
4. Update the component registry to include your new component

## Extending the System

The Site Generator is designed to be easily extendable:

- **New Variants**: Add new component variants in the appropriate `variants` directory
- **New Components**: Create new elements, blocks, or sections following the established pattern
- **New Themes**: Add theme presets to the theme system
- **UI Enhancements**: The studio interface can be extended with new features and tools

## Future Enhancements

Planned enhancements include:

- **Component and Section Drag-and-Drop**: Visual ordering and organization
- **Enhanced Theme Editor**: More visual theme customization options
- **Code View**: Ability to view and edit the underlying code
- **Export Options**: Additional export formats and deployment integrations
- **Collaboration Features**: Multi-user editing and feedback tools
