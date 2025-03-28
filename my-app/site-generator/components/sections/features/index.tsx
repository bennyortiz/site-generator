import React from 'react';
import { FeaturesComponent, FeaturesProps } from './types';
import { featuresMetadata } from './metadata';
import GridFeatures from './variants/grid';
import AlternatingFeatures from './variants/alternating';
import IconGridFeatures from './variants/icon-grid';
import CenteredFeatures from './variants/centered';
import CardBasedFeatures from './variants/card-based-features';
import TabbedFeaturesShowcase from './variants/tabbed-features-showcase';
import NumberedFeaturesList from './variants/numbered-features-list';

/**
 * Features Section Component
 * 
 * A section to showcase features or benefits of a product or service.
 * This component provides a unified API for all features variants.
 */
const Features: FeaturesComponent = ({
  heading,
  subheading,
  features,
  columns = 3,
  layout = 'grid',
  background = 'light',
  spacing = 'normal',
  dividers = false,
  cta,
  className,
  children,
  ...props
}) => {
  // Choose the appropriate implementation based on layout type
  if (layout === 'alternating') {
    return (
      <AlternatingFeatures
        heading={heading}
        subheading={subheading}
        features={features}
        background={background}
        spacing={spacing}
        cta={cta}
        className={className}
        {...props}
      >
        {children}
      </AlternatingFeatures>
    );
  }
  
  if (layout === 'icon-grid') {
    return (
      <IconGridFeatures
        heading={heading}
        subheading={subheading}
        features={features}
        columns={columns}
        background={background}
        spacing={spacing}
        cta={cta}
        className={className}
        {...props}
      >
        {children}
      </IconGridFeatures>
    );
  }
  
  if (layout === 'centered') {
    return (
      <CenteredFeatures
        heading={heading}
        subheading={subheading}
        features={features}
        background={background}
        spacing={spacing}
        cta={cta}
        className={className}
        {...props}
      >
        {children}
      </CenteredFeatures>
    );
  }
  
  if (layout === 'card-based-features') {
    return (
      <CardBasedFeatures
        heading={heading}
        subheading={subheading}
        features={features}
        background={background}
        spacing={spacing}
        cta={cta}
        className={className}
        {...props}
      >
        {children}
      </CardBasedFeatures>
    );
  }
  
  if (layout === 'tabbed-features-showcase') {
    return (
      <TabbedFeaturesShowcase
        heading={heading}
        subheading={subheading}
        features={features}
        background={background}
        spacing={spacing}
        cta={cta}
        className={className}
        {...props}
      >
        {children}
      </TabbedFeaturesShowcase>
    );
  }
  
  if (layout === 'numbered-features-list') {
    return (
      <NumberedFeaturesList
        heading={heading}
        subheading={subheading}
        features={features}
        background={background}
        spacing={spacing}
        cta={cta}
        className={className}
        {...props}
      >
        {children}
      </NumberedFeaturesList>
    );
  }
  
  // Default to grid layout
  return (
    <GridFeatures
      heading={heading}
      subheading={subheading}
      features={features}
      columns={columns}
      background={background}
      spacing={spacing}
      dividers={dividers}
      cta={cta}
      className={className}
      {...props}
    >
      {children}
    </GridFeatures>
  );
};

// Standard variants
Features.Grid = GridFeatures;
Features.Alternating = AlternatingFeatures;
Features.IconGrid = IconGridFeatures;
Features.Centered = CenteredFeatures;

// New enhanced variants
Features.CardBased = CardBasedFeatures;
Features.TabbedShowcase = TabbedFeaturesShowcase;
Features.NumberedList = NumberedFeaturesList;

// Attach metadata to the component for the registry system
Features.metadata = featuresMetadata;

export default Features;
