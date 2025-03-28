# Component Architecture

This document outlines the architecture for components in the site generator, including how to create new components, add variants, and register them with the component registry.

## Overview

Our component architecture follows a hierarchical structure:

1. **Sections**: Full-width page components (Hero, Features, Pricing, etc.)
2. **Blocks**: Reusable content containers (Card, Accordion, Tabs, etc.)
3. **Elements**: Atomic UI components (Button, Input, Icon, etc.)

Each component type follows a standardized structure and supports multiple **variants**, which are different visual or functional implementations of the same component type.

## Directory Structure

Components follow this standard directory structure:

```
components/
  sections/
    features/                 # Component directory
      index.tsx               # Main component and variant selector
      metadata.ts             # Component metadata, variants info
      types.ts                # TypeScript interfaces
      variants/               # All variant implementations
        grid.tsx
        alternating.tsx
        ...
      hooks/                  # Component-specific hooks (optional)
      utils/                  # Component-specific utilities (optional)
```

## Creating a New Component

To create a new component:

1. Copy the template from `templates/new-section` to the appropriate directory
2. Rename the component and update files as needed
3. Implement variants in the `variants/` directory
4. Define metadata in `metadata.ts`
5. Update types in `types.ts`
6. Wire everything together in `index.tsx`

## Using the Component Factory

We provide a component factory to standardize how components with variants are created:

```typescript
import { createComponentWithVariants } from '../../utils/component-factory';

// Create a component with variants
const MyComponent = createComponentWithVariants({
  defaultComponent: DefaultImplementation,
  metadata: componentMetadata,
  variants: {
    'variant-id-1': VariantImplementation1,
    'variant-id-2': VariantImplementation2,
  }
});

export default MyComponent;
```

### Benefits of the Component Factory

- **Consistent API**: All components have the same API for selecting variants
- **Type Safety**: TypeScript integration ensures correct props and variants
- **Metadata Integration**: Automatic association of metadata with components
- **Registry Integration**: Simplified registration with the component registry

## Component Metadata

Component metadata provides information about the component and its variants:

```typescript
export const componentMetadata: ComponentMetadata = {
  type: 'section', // 'section', 'block', or 'element'
  name: 'features', // Unique identifier
  description: 'A section to showcase features or benefits',
  defaultVariant: 'three-column-grid-features',
  variants: [
    {
      id: 'three-column-grid-features',
      name: 'Three Column Grid Features',
      description: 'Features displayed in a three-column grid layout',
      thumbnail: '/thumbnails/sections/features/grid.jpg',
      tags: ['grid', 'columns', 'list']
    },
    // More variants...
  ]
};
```

## Auto-Discovery System

Components are automatically discovered and registered with the registry through the auto-discovery system. This happens in `engine/auto-discovery.ts`.

To make your component auto-discoverable:

1. Follow the standard directory structure
2. Include metadata with the component
3. Export variants as properties of the component

The auto-discovery system will register your component when the application starts.

## Adding a New Variant to an Existing Component

To add a new variant to an existing component:

1. Create a new file in the `variants/` directory
2. Implement the variant component
3. Add the variant to the component's metadata in `metadata.ts`
4. Update the component's `index.tsx` to include the new variant

## Best Practices

- **Keep variants focused**: Each variant should have a clear purpose and distinct appearance
- **Reuse styles**: Share styling utilities and classnames between variants
- **Document props**: Add JSDoc comments to props and interfaces
- **Include examples**: Add example usage in the metadata
- **Use semantic names**: Name variants based on their layout/purpose (e.g., 'grid', 'alternating')
- **Maintain backward compatibility**: When updating components, ensure existing configurations still work

## Example Usage

```tsx
// Using a component with a specific variant
<Features
  variant="three-column-grid-features"
  heading="Key Features"
  subheading="Why our product is awesome"
  features={[
    { title: "Feature 1", description: "..." },
    { title: "Feature 2", description: "..." },
    { title: "Feature 3", description: "..." }
  ]}
/>

// Using the default variant
<Features
  heading="Key Features"
  subheading="Why our product is awesome"
  features={[...]}
/>

// Using a component's variant directly
<Features.Grid
  heading="Key Features"
  subheading="Why our product is awesome"
  features={[...]}
/>
