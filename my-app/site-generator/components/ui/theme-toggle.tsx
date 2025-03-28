'use client';

import { useTheme } from '@/site-generator/context/theme-context';
import { IconSun, IconMoon, IconDeviceDesktop } from '@tabler/icons-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-md ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'text-gray-500'}`}
        aria-label="Light mode"
      >
        <IconSun className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-md ${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'text-gray-500'}`}
        aria-label="Dark mode"
      >
        <IconMoon className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-md ${theme === 'system' ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100' : 'text-gray-500'}`}
        aria-label="System preference"
      >
        <IconDeviceDesktop className="h-4 w-4" />
      </button>
    </div>
  );
}
