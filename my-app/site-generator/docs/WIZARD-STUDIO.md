# Wizard Studio Interface

This document outlines the new wizard-based studio interface designed to guide users through the process of creating a Next.js site with a customizable structure and design.

## Overview

The Wizard Studio Interface provides a step-by-step approach to site generation, allowing users to select pages, customize sections, define design settings, and export the project. It focuses on visual selection of variants and templates with popup interfaces for detailed customization.

## Key Features

1. **Multi-Page Management**: Create and configure multiple pages for your site
2. **Visual Section Selection**: Choose from different variants for each section with visual previews
3. **Global Design Controls**: Set consistent design choices across the entire site
4. **Live Preview**: See how your design choices affect the site in real-time
5. **Streamlined Export**: Generate a complete Next.js project with a single click

## The Four-Step Process

### Step 1: Page Selection

Select which pages to include in your site:

- Home Page
- About Page
- Services Page
- Contact Page
- Blog Page
- Portfolio Page
- Pricing Page
- Team Page
- FAQ Page
- Testimonials Page

Each page comes with default sections appropriate for its purpose. You can also add custom pages as needed.

### Step 2: Page Structure

For each selected page, you can:

- View the default sections included for that page type
- Customize section variants by clicking the "Customize" button
- Add new sections to the page
- Reorder sections to change their appearance on the page
- Navigate between different pages using the page selector

When you click "Customize" on a section, a popup appears with visual options for different variants of that section type. Simply click on a variant to select it and see how it changes in the preview.

### Step 3: Design Settings

Configure global design settings that apply to all pages:

- **Color Scheme**: Choose from professional, creative, modern, bold, or minimal color palettes
- **Border Radius**: Select the roundness of corners from none (0px) to pill-shaped (8px+)
- **Spacing Scale**: Define the density of content from compact to airy
- **Typography**: Select font combinations that match your brand's personality

The live preview updates in real-time as you adjust these settings, showing you exactly how your choices will affect the design.

### Step 4: Review & Export

Before exporting your Next.js project, you can:

- Review a summary of all selected pages and sections
- Check your design settings to ensure they match your vision
- Set your project name (which will become the directory name)
- Configure export options such as:
  - Including a README file
  - Generating placeholder content
  - Adding example blog posts
  - Including component comments for developers

When everything looks good, click "Export Project" to generate your complete Next.js site.

## Popup Customization

The popup customization interface is a key feature of the Wizard Studio:

1. Click the "Customize" button on any section
2. A modal will appear showing all available variants for that section type
3. Each variant is displayed with a visual preview
4. Click on a variant to select it
5. Click "Apply Selection" to confirm your choice or "Cancel" to revert

This approach provides a quick and intuitive way to explore different design options without having to write any code.

## Technical Implementation

The wizard interface is built on several key components:

1. **StudioContext**: Manages state across all steps of the wizard
2. **Step Navigation**: Handles movement between the four main steps
3. **Section Variant Popup**: Provides visual selection of section variants
4. **Live Preview**: Shows how the current configuration will look

Each step is implemented as a separate component, making the code modular and maintainable.

## Benefits Over Previous Approaches

This wizard-based approach offers several advantages:

- **More Intuitive**: Visual selection is easier than text-based configuration
- **Better Organization**: Step-by-step process prevents overwhelming users
- **Faster Workflows**: Popup customization is more efficient than navigating to separate screens
- **Comprehensive Preview**: See how all your choices work together before exporting

## Getting Started

To use the Wizard Studio interface:

1. Start the development server with `npm run dev`
2. Navigate to `/studio` in your browser
3. Follow the step-by-step process to create your site
4. Export the project when you're satisfied with the result

You can always return to previous steps using the navigation controls if you want to make changes.
