import React from 'react';
import { HeroProps, heroContentToProps } from './types';
import CenteredHero from './variants/centered';
import FullscreenVideoHero from './variants/fullscreen-video-with-overlay';
import { cn } from '../../../utils/cn';
import { heroMetadata } from './metadata';

/**
 * Hero Component with Variants
 * 
 * Extended type for the Hero component that includes its variant components
 */
interface HeroComponent extends React.FC<HeroProps> {
  Centered: React.FC<HeroProps>;
  Split: React.FC<HeroProps>;
  Minimal: React.FC<HeroProps>;
  FullscreenVideo: React.FC<HeroProps>;
  metadata: typeof heroMetadata;
}

/**
 * Default Hero Component
 * 
 * This is the main entry point for the Hero section. It renders the default
 * variant based on the metadata.defaultVariant value.
 */
const Hero: HeroComponent = (props) => {
  // Default implementation based on metadata
  return <CenteredHero {...props} />;
};

/**
 * Attach metadata to the component for the registration system
 */
Hero.metadata = heroMetadata;

/**
 * Centered variant export
 */
Hero.Centered = CenteredHero;

/**
 * Fullscreen Video variant export
 */
Hero.FullscreenVideo = FullscreenVideoHero;

/**
 * Split variant
 * A hero section with content on one side and an image on the other
 */
Hero.Split = (props: HeroProps) => (
  <div className={cn("relative bg-white dark:bg-gray-900", props.className)}>
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          {props.heading}
        </h1>
        {props.subheading && (
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            {props.subheading}
          </p>
        )}
        {props.cta && (
          <div className="flex flex-col sm:flex-row gap-4">
            {props.cta.primary && (
              <a
                href={props.cta.primary.href}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium inline-flex items-center"
              >
                {props.cta.primary.text}
              </a>
            )}
            {props.cta.secondary && (
              <a
                href={props.cta.secondary.href}
                className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-md font-medium"
              >
                {props.cta.secondary.text}
              </a>
            )}
          </div>
        )}
      </div>
      {props.image && (
        <div className="w-full md:w-1/2">
          <img 
            src={props.image} 
            alt="" 
            className="w-full h-full object-cover" 
          />
        </div>
      )}
    </div>
  </div>
);

/**
 * Minimal variant - to be implemented
 * A minimal hero with just heading and subheading
 */
Hero.Minimal = (props: HeroProps) => (
  <div className={cn("bg-white dark:bg-gray-900 py-12", props.className)}>
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        {props.heading}
      </h1>
      {props.subheading && (
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {props.subheading}
        </p>
      )}
    </div>
  </div>
);

export default Hero;
