# Modern UI Components for Site Generator

This document provides an overview of the new UI components we've added to enhance the Site Generator Studio experience. These components are designed to make it easier for developers to create, customize, and manage components while keeping a smooth workflow.

## Component Overview

### ComponentBrowser

`ComponentBrowser` provides a visual way to browse, search, and preview available components in the system.

**Features:**
- Category-based browsing (Sections, Blocks, Elements)
- Search functionality to find components by name or description
- Tag-based filtering
- Component cards with expandable variant lists
- Quick add buttons

**Usage Example:**
```tsx
<ComponentBrowser
  onSelectComponent={(componentType, variantId) => {
    // Handle component selection
    console.log(`Selected ${componentType} with variant ${variantId}`);
  }}
  className="h-full"
/>
```

### ComponentInspector

`ComponentInspector` provides a detailed interface for editing component properties and customizing their appearance.

**Features:**
- Property editing organized by categories (Basic, Content, Appearance, Layout, Advanced)
- Variant selection
- Style controls with visual editing
- Advanced options including custom CSS and accessibility settings
- Component deletion

**Usage Example:**
```tsx
<ComponentInspector
  componentType="hero"
  variantId="centered"
  componentData={{
    title: "Welcome",
    description: "This is a hero section",
    buttonText: "Learn More"
  }}
  onPropertyChange={(path, value) => {
    // Handle property changes
    console.log(`Changed ${path} to ${value}`);
  }}
  onVariantChange={(variantId) => {
    // Handle variant changes
    console.log(`Changed variant to ${variantId}`);
  }}
  onDelete={() => {
    // Handle component deletion
    console.log("Component deleted");
  }}
/>
```

### QuickPalette

`QuickPalette` provides a command palette-style interface for rapid actions and component access.

**Features:**
- Keyboard shortcut activation (Cmd/Ctrl + K)
- Search for components and actions
- Category-based grouping
- Keyboard navigation
- Shortcuts display

**Usage Example:**
```tsx
<QuickPalette
  isOpen={isPaletteOpen}
  onClose={() => setIsPaletteOpen(false)}
  onSelectAction={(action) => {
    // Handle action selection
    console.log(`Selected action: ${action.id}`);
  }}
  onSelectComponent={(componentType, variantId) => {
    // Handle component selection
    console.log(`Selected ${componentType} with variant ${variantId}`);
  }}
/>
```

### ComponentPlaceholder

`ComponentPlaceholder` provides an intuitive way to add or represent components in layouts.

**Features:**
- Multiple types: empty (for adding new), drop (for drag-and-drop), component (for existing components)
- Visual feedback for hover, active, and drag states
- Component info badge
- Component actions toolbar (move, duplicate, delete)

**Usage Example:**
```tsx
<ComponentPlaceholder
  type="empty"
  onClick={() => {
    // Handle click to add a component
    console.log("Open component browser");
  }}
/>

<ComponentPlaceholder
  type="component"
  componentName="Hero Section"
  componentType="section"
  componentVariant="centered"
  isActive={true}
  onMoveUp={() => {/* Handle move up */}}
  onMoveDown={() => {/* Handle move down */}}
  onDelete={() => {/* Handle delete */}}
  onDuplicate={() => {/* Handle duplicate */}}
>
  {/* Actual component content or preview */}
  <div className="p-4 bg-gray-100">Component Preview</div>
</ComponentPlaceholder>
```

### CustomComponentsPanel

`CustomComponentsPanel` provides an interface for managing custom components created by the developer.

**Features:**
- Create new components (sections, blocks, elements)
- Search and filter components
- Type-based filtering
- Component editing
- Component deletion
- Import/export functionality

**Usage Example:**
```tsx
<CustomComponentsPanel
  customComponents={[
    {
      id: 'custom-1',
      name: 'Product Feature',
      type: 'section',
      description: 'A custom product feature section',
      lastModified: '2 days ago'
    }
  ]}
  onCreateComponent={(type) => {
    // Handle component creation
    console.log(`Create new ${type}`);
  }}
  onEditComponent={(id) => {
    // Handle component editing
    console.log(`Edit component ${id}`);
  }}
  onDeleteComponent={(id) => {
    // Handle component deletion
    console.log(`Delete component ${id}`);
  }}
  onImportComponents={() => {
    // Handle component import
    console.log("Import components");
  }}
/>
```

## Enhanced Studio Interface

The new `EnhancedStudioPage` integrates all these components into a cohesive interface designed for maximum developer productivity.

**Features:**
- Split-view layout with sidebar, content panel, and preview
- Command palette for quick actions (Cmd/Ctrl + K)
- Component browser integration
- Component inspector for editing selected components
- Custom components management

## Keyboard Shortcuts

- `Cmd/Ctrl + K`: Open command palette
- `Cmd/Ctrl + S`: Save current site
- `Cmd/Ctrl + E`: Export project
- `Cmd/Ctrl + P`: Preview site
- `Cmd/Ctrl + T`: Open theme editor
- `Cmd/Ctrl + C`: View code

## Workflow Integration

These new components are designed to work together to facilitate a smooth workflow:

1. Browse and select components from `ComponentBrowser`
2. Customize their properties with `ComponentInspector`
3. Quick access features with `QuickPalette`
4. Manage component positioning with `ComponentPlaceholder`
5. Create and manage custom components with `CustomComponentsPanel`

The enhanced UI greatly improves the developer experience by providing a more flexible and powerful interface for site creation.
