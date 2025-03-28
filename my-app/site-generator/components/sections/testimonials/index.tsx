import React from 'react';
import { TestimonialsComponent, TestimonialsProps } from './types';
import { testimonialsMetadata } from './metadata';
import GridTestimonials from './variants/grid';
import SpotlightTestimonials from './variants/spotlight';
import CarouselTestimonials from './variants/carousel';
import QuotesTestimonials from './variants/quotes';
import CompanyLogosTestimonials from './variants/company-logos';
import VideoTestimonials from './variants/video-testimonials';
import RatingFocusedTestimonials from './variants/rating-focused';

/**
 * Testimonials Section Component
 * 
 * A section to showcase customer testimonials, reviews, and social proof.
 * This component provides a unified API for all testimonial variants.
 */
const Testimonials: TestimonialsComponent = ({
  heading,
  subheading,
  testimonials,
  layout = 'grid',
  columns = 3,
  background = 'light',
  showRatings = true,
  autoplay = true,
  autoplayInterval = 5000,
  logoImages,
  averageRating,
  totalReviews,
  ratingDistribution,
  cta,
  className,
  children,
  ...props
}) => {
  // Choose the appropriate implementation based on layout type
  if (layout === 'carousel') {
    return (
      <CarouselTestimonials
        heading={heading}
        subheading={subheading}
        testimonials={testimonials}
        background={background}
        showRatings={showRatings}
        autoplay={autoplay}
        autoplayInterval={autoplayInterval}
        cta={cta}
        className={className}
        {...props}
      >
        {children}
      </CarouselTestimonials>
    );
  }
  
  if (layout === 'spotlight') {
    return (
      <SpotlightTestimonials
        heading={heading}
        subheading={subheading}
        testimonials={testimonials}
        background={background}
        showRatings={showRatings}
        cta={cta}
        className={className}
        {...props}
      >
        {children}
      </SpotlightTestimonials>
    );
  }
  
  if (layout === 'quotes') {
    return (
      <QuotesTestimonials
        heading={heading}
        subheading={subheading}
        testimonials={testimonials}
        columns={columns}
        background={background}
        showRatings={showRatings}
        cta={cta}
        className={className}
        {...props}
      >
        {children}
      </QuotesTestimonials>
    );
  }
  
  if (layout === 'company-logos') {
    return (
      <CompanyLogosTestimonials
        heading={heading}
        subheading={subheading}
        testimonials={testimonials}
        background={background}
        logoImages={logoImages}
        cta={cta}
        className={className}
        {...props}
      >
        {children}
      </CompanyLogosTestimonials>
    );
  }
  
  if (layout === 'video') {
    return (
      <VideoTestimonials
        heading={heading}
        subheading={subheading}
        testimonials={testimonials}
        columns={columns}
        background={background}
        autoplay={autoplay}
        cta={cta}
        className={className}
        {...props}
      >
        {children}
      </VideoTestimonials>
    );
  }
  
  if (layout === 'rating-focused') {
    return (
      <RatingFocusedTestimonials
        heading={heading}
        subheading={subheading}
        testimonials={testimonials}
        background={background}
        showRatings={showRatings}
        averageRating={averageRating}
        totalReviews={totalReviews}
        ratingDistribution={ratingDistribution}
        cta={cta}
        className={className}
        {...props}
      >
        {children}
      </RatingFocusedTestimonials>
    );
  }
  
  // Default to grid layout
  return (
    <GridTestimonials
      heading={heading}
      subheading={subheading}
      testimonials={testimonials}
      columns={columns}
      background={background}
      showRatings={showRatings}
      cta={cta}
      className={className}
      {...props}
    >
      {children}
    </GridTestimonials>
  );
};

/**
 * Grid Testimonials Variant
 * 
 * A responsive grid layout of testimonial cards with avatars and quotes
 */
Testimonials.Grid = GridTestimonials;

/**
 * Spotlight Testimonials Variant
 * 
 * A large, featured testimonial with prominent quote and imagery
 */
Testimonials.Spotlight = SpotlightTestimonials;

/**
 * Carousel Testimonials Variant
 * 
 * A testimonial carousel that cycles through testimonials one at a time
 */
Testimonials.Carousel = CarouselTestimonials;

/**
 * Quotes Testimonials Variant
 * 
 * Minimalist design focusing on the quotes with subtle attribution
 */
Testimonials.Quotes = QuotesTestimonials;

/**
 * Company Logos Testimonials Variant
 * 
 * Testimonials with prominent company logos for enhanced social proof
 */
Testimonials.CompanyLogos = CompanyLogosTestimonials;

/**
 * Video Testimonials Variant
 * 
 * Grid or carousel of video testimonials with thumbnails and playback
 */
Testimonials.Video = VideoTestimonials;

/**
 * Rating-Focused Testimonials Variant
 * 
 * Testimonials with prominent star ratings and review metrics
 */
Testimonials.RatingFocused = RatingFocusedTestimonials;

// Attach metadata to the component for the registry system
Testimonials.metadata = testimonialsMetadata;

export default Testimonials;
