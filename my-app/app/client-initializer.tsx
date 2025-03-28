'use client';

import { useEffect } from 'react';
import { initializeRegistry } from '../site-generator/engine/registry-setup';
import { EnhancedThemeProvider } from '../site-generator/context/enhanced-theme-context';

// Client-side initialization component
export default function ClientInitializer({ children }: { children?: React.ReactNode }) {
  useEffect(() => {
    // Only initialize on the client side
    initializeRegistry();
  }, []);
  
  // Wrap everything in the EnhancedThemeProvider
  return (
    <EnhancedThemeProvider>
      {children}
    </EnhancedThemeProvider>
  );
}
