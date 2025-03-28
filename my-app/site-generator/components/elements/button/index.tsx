import React from 'react';
import { ButtonComponent, ButtonProps } from './types';
import { buttonMetadata } from './metadata';
import PrimaryButton from './variants/primary';
import OutlineButton from './variants/outline-button';
import IconOnlyButton from './variants/icon-only-button';
import TextButtonWithIcon from './variants/text-button-with-icon';
import CtaButtonWithArrow from './variants/cta-button-with-arrow';
import FullWidthButton from './variants/full-width-button';
import { Button as ShadcnButton } from '@/components/ui/button';
import { cn } from '../../../utils/cn';

/**
 * Button Element Component
 * 
 * A customizable button component that wraps the shadcn UI Button.
 * This component provides a unified API for all button variants.
 */
const Button: ButtonComponent = ({
  children,
  className,
  variant = 'default',
  size = 'default',
  icon,
  trailingIcon,
  fullWidth,
  isLoading = false,
  loadingText,
  href,
  ...props
}) => {
  // Default implementation uses Primary Button variant
  return (
    <PrimaryButton
      variant={variant}
      size={size}
      className={className}
      icon={icon}
      trailingIcon={trailingIcon}
      fullWidth={fullWidth}
      isLoading={isLoading}
      loadingText={loadingText}
      href={href}
      {...props}
    >
      {children}
    </PrimaryButton>
  );
};

/**
 * Primary Button Variant
 * 
 * Main action button with prominent styling
 */
Button.Primary = (props: ButtonProps) => <PrimaryButton {...props} />;

/**
 * Secondary Button Variant
 * 
 * Alternative action button with less emphasis
 */
Button.Secondary = (props: ButtonProps) => (
  <ShadcnButton
    variant="secondary"
    className={cn(props.fullWidth ? 'w-full' : '', props.className)}
    asChild={!!props.href}
    {...props}
  >
    {props.href ? (
      <a href={props.href}>
        {props.icon && <span className="mr-2">{props.icon}</span>}
        {props.children}
        {props.trailingIcon && <span className="ml-2">{props.trailingIcon}</span>}
      </a>
    ) : (
      <>
        {props.icon && <span className="mr-2">{props.icon}</span>}
        {props.children}
        {props.trailingIcon && <span className="ml-2">{props.trailingIcon}</span>}
      </>
    )}
  </ShadcnButton>
);

/**
 * Outline Button Variant
 * 
 * Button with outline styling and transparent background
 */
Button.Outline = (props: ButtonProps) => <OutlineButton {...props} />;

/**
 * Ghost Button Variant
 * 
 * Button with no background until hovered
 */
Button.Ghost = (props: ButtonProps) => (
  <ShadcnButton
    variant="ghost"
    className={cn(props.fullWidth ? 'w-full' : '', props.className)}
    asChild={!!props.href}
    {...props}
  >
    {props.href ? (
      <a href={props.href}>
        {props.icon && <span className="mr-2">{props.icon}</span>}
        {props.children}
        {props.trailingIcon && <span className="ml-2">{props.trailingIcon}</span>}
      </a>
    ) : (
      <>
        {props.icon && <span className="mr-2">{props.icon}</span>}
        {props.children}
        {props.trailingIcon && <span className="ml-2">{props.trailingIcon}</span>}
      </>
    )}
  </ShadcnButton>
);

/**
 * Link Button Variant
 * 
 * Button that appears as a link
 */
Button.Link = (props: ButtonProps) => (
  <ShadcnButton
    variant="link"
    className={cn(props.fullWidth ? 'w-full' : '', props.className)}
    asChild={!!props.href}
    {...props}
  >
    {props.href ? (
      <a href={props.href}>
        {props.icon && <span className="mr-2">{props.icon}</span>}
        {props.children}
        {props.trailingIcon && <span className="ml-2">{props.trailingIcon}</span>}
      </a>
    ) : (
      <>
        {props.icon && <span className="mr-2">{props.icon}</span>}
        {props.children}
        {props.trailingIcon && <span className="ml-2">{props.trailingIcon}</span>}
      </>
    )}
  </ShadcnButton>
);

/**
 * Icon Button Variant
 * 
 * Compact button that displays only an icon
 */
Button.Icon = (props: ButtonProps) => <IconOnlyButton {...props} />;

/**
 * CTA Button Variant
 * 
 * Call-to-action button with prominent styling and optional arrow icon
 */
Button.CTA = (props: ButtonProps) => <CtaButtonWithArrow {...props} />;

/**
 * Text Button With Icon Variant
 * 
 * Button that appears as text with an icon, suitable for less prominent actions
 */
Button.TextWithIcon = (props: ButtonProps) => <TextButtonWithIcon {...props} />;

/**
 * Full Width Button Variant
 * 
 * Button that spans the full width of its container, suitable for mobile interfaces
 */
Button.FullWidth = (props: ButtonProps) => <FullWidthButton {...props} />;

// Attach metadata to the component for the registry system
Button.metadata = buttonMetadata;

export default Button;
