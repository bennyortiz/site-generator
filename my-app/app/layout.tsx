import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientInitializer from '@/app/client-initializer';

// Initialize the Inter font
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Next.js Template Site Generator',
  description: 'Build production-ready, customizable Next.js sites in minutes with our configuration-driven site generator.',
  keywords: ['Next.js', 'site generator', 'template', 'React', 'TypeScript', 'Tailwind CSS'],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-background text-foreground">
        <ClientInitializer>
          {children}
        </ClientInitializer>
      </body>
    </html>
  );
}
