# Site Generator Studio Documentation

## Overview

The Site Generator Studio provides a wizard-like interface for users to create and configure their websites. It follows a step-by-step approach, guiding users through template selection, layout configuration, content editing, theme customization, and finally export preview.

## Architecture

The Studio follows a modular architecture with components organized into logical groups for better maintainability and scalability.

### Directory Structure

```
site-generator/
  components/
    studio/
      core/            # Core components (StepIndicator, TemplateSelector, ContentEditor)
      layout/          # Layout components (LayoutConfigurator, ModernLayout, etc.)
      theme/           # Theme-related components (ThemeEditor, ThemePresetSelector, etc.)
      export/          # Export-related components (ExportPreview, ExportModal)
      ui/              # UI components (DevicePreview)
      context/         # Context providers and hooks (StudioContext, useStudio)
      index.ts         # Main barrel file for exporting all components
```

### State Management

All state is managed through the StudioContext provider, which centralizes:

- Site configuration (templates, layouts, content, themes)
- UI state (current step, preview device, modal visibility)
- Helper methods for common actions

This approach eliminates prop drilling and makes it easier to share state between components.

## Component Groups

### Core Components

- **StepIndicator**: Displays and manages navigation between wizard steps
- **TemplateSelector**: Allows users to select a starting template
- **ContentEditor**: Enables editing of website content

### Layout Components

- **LayoutConfigurator**: Provides UI for configuring site layout
- **ModernLayout**: Implements the standard layout structure
- **StudioSidebar**: Sidebar navigation component
- **VariantSelector**: Allows selection between component variants

### Theme Components

- **ThemeEditor**: Interface for customizing site theme
- **ThemePresetSelector**: Selection of predefined themes
- **ThemePresetPanel**: Panel displaying theme preset options

### Export Components

- **ExportPreview**: Preview of the final site before export
- **ExportModal**: Export options and confirmation dialog

### UI Components

- **DevicePreview**: Responsive preview showing site at different screen sizes

## Usage

The main studio page (`app/studio/page.tsx`) uses the modular components via the barrel file:

```typescript
import {
  StepIndicator,
  ContentEditor,
  TemplateSelector,
  // ...more imports
  StudioProvider,
  useStudio
} from '../../site-generator/components/studio';
```

The page component wraps everything in the provider:

```typescript
export default function StudioPage() {
  return (
    <StudioProvider>
      <StudioContent />
    </StudioProvider>
  );
}
```

And inner components can access shared state through the hook:

```typescript
const {
  currentStep,
  setCurrentStep,
  // ...more state
} = useStudio();
```

## Extension

To add new functionality:

1. Create the component in the appropriate subdirectory
2. Export it from the subdirectory's index.ts
3. The main barrel file will automatically re-export it

## Future Improvements

Potential areas for enhancement:

- More template options
- Expanded theme customization 
- Additional layout options
- Enhanced export capabilities
- Integration with content management systems
