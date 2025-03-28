# Next.js Template Site Generator

A configuration-driven site generator for creating production-ready Next.js websites with ease. This tool allows you to quickly build customized websites using pre-built templates, components, and themes.

## Features

- **Configuration-Driven**: Define your site structure, content, and styling through a centralized configuration.
- **Modern Tech Stack**: Built with Next.js, React, TypeScript, Tailwind CSS, and shadcn components.
- **Ready-Made Templates**: Start with pre-built templates for different business types.
- **Customizable Themes**: Adjust colors, typography, and other design elements to match your brand.
- **Production-Ready**: Export complete, optimized Next.js projects ready for deployment.

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/nextjs-template-site-generator.git
cd nextjs-template-site-generator
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
/my-app
  /app                         # Next.js App Router
    /page.tsx                  # Home page
    /studio                    # Studio interface
      /page.tsx                # Studio page component
  /site-generator              # Core generator code
    /components                # UI components
      /sections                # Section components (hero, services, etc.)
      /layout                  # Layout components
      /ui                      # UI utility components
    /config                    # Configuration system
      /default-configs         # Default template configurations
    /engine                    # Generator engine
      component-registry.ts    # Maps configurations to components
      generator.ts             # Core generation logic
      theme-processor.ts       # Theme processing utilities
    /templates                 # Template definitions
    /types                     # Type definitions
    /utils                     # Utility functions
```

## Usage

1. **Access the Studio**: Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to use the site generator interface.

2. **Choose a Template**: Select a template that fits your business type as a starting point.

3. **Customize Content & Theme**: Personalize your site with your content, branding, and visual preferences.

4. **Export & Deploy**: Generate your complete Next.js project and deploy it to your preferred hosting platform.

## Customizing Templates

You can customize existing templates or create new ones by modifying the configuration files in `site-generator/config/default-configs/`.

Each template configuration follows this structure:

```typescript
interface SiteConfig {
  metadata: {
    title: string;
    description: string;
    // ...
  };
  business: {
    name: string;
    contact: {
      // ...
    };
    // ...
  };
  theme: {
    colors: {
      primary: string;
      secondary: string;
      // ...
    };
    fonts: {
      // ...
    };
    // ...
  };
  navigation: {
    // ...
  };
  pages: {
    [key: string]: {
      path: string;
      title: string;
      sections: Section[];
    };
  };
}
```

## Creating New Components

To add new section types:

1. Create a new component in `site-generator/components/sections/`.
2. Define types for the component props and content.
3. Register the component in `component-registry.ts`.
4. Update the configuration types in `types/config.ts`.

## Advanced Configuration

For advanced customization, you can:

- Modify the theme processor in `engine/theme-processor.ts` to add new theme capabilities.
- Extend the generator in `engine/generator.ts` to add new export options.
- Create new templates in `config/default-configs/`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
