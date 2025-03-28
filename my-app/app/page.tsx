import Link from 'next/link';
import { IconArrowRight, IconBrandReact, IconCode, IconDeviceLaptop, IconSitemap } from '@tabler/icons-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0062ff1a] to-[#6b72801a]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
            Next.js Template Site Generator
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-10 max-w-5xl mx-auto">
            Build production-ready, customizable Next.js sites in minutes with our configuration-driven site generator.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link 
              href="/studio" 
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium inline-flex items-center justify-center transition-colors"
            >
              Get Started
              <IconArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="#features" 
              className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-medium inline-flex items-center justify-center transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <IconCode className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Configuration-Driven</h3>
              <p className="text-gray-600 flex-grow">
                Define your site structure, content, and styling through a centralized configuration. No need to write boilerplate code.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <IconBrandReact className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Tech Stack</h3>
              <p className="text-gray-600 flex-grow">
                Built with Next.js, React, TypeScript, Tailwind CSS, shadcn components, and other modern libraries for optimal performance and developer experience.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <IconSitemap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ready-Made Templates</h3>
              <p className="text-gray-600 flex-grow">
                Choose from a variety of pre-built templates for different business types and customize to your needs.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <IconDeviceLaptop className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Production-Ready</h3>
              <p className="text-gray-600 flex-grow">
                Export complete, optimized Next.js projects that follow best practices and are ready for deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Studio UIs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Interface</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="h-20 w-20 bg-white rounded-lg shadow mx-auto mb-4"></div>
                  <div className="h-3 w-32 bg-gray-200 rounded-full mx-auto"></div>
                  <div className="h-2 w-24 bg-gray-200 rounded-full mx-auto mt-2"></div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Classic Studio</h3>
                <p className="text-gray-600 mb-4">
                  Traditional wizard-based interface with step-by-step navigation. Perfect for beginners.
                </p>
                <Link 
                  href="/studio" 
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  Try Classic Studio
                  <IconArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-r from-indigo-50 to-purple-50 flex items-center justify-center">
                <div className="text-center p-4 flex items-center">
                  <div className="w-1/3 h-32 bg-white rounded-lg shadow"></div>
                  <div className="w-2/3 h-32 bg-white rounded-lg shadow ml-2 flex items-center justify-center">
                    <div className="h-20 w-20 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Modern Studio</h3>
                <p className="text-gray-600 mb-4">
                  Split-view interface with persistent preview pane. Great for experienced users.
                </p>
                <Link 
                  href="/studio/modernui" 
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  Try Modern Studio
                  <IconArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-r from-violet-50 to-fuchsia-50 flex items-center justify-center">
                <div className="text-center p-4 flex items-center">
                  <div className="w-1/4 h-32 bg-white rounded-lg shadow"></div>
                  <div className="w-3/4 h-32 bg-white rounded-lg shadow ml-2 flex items-center justify-center relative">
                    <div className="h-16 w-16 bg-gray-100 rounded"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-gray-50 flex items-center px-2">
                      <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Enhanced Studio</h3>
                <p className="text-gray-600 mb-4">
                  Our most advanced interface with component browser, inspector, and quick palette for maximum productivity.
                </p>
                <Link 
                  href="/studio/enhanced" 
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  Try Enhanced Studio
                  <IconArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs px-2 py-1 rounded-bl">
                NEW
              </div>
              <div className="h-48 bg-gradient-to-r from-teal-50 to-emerald-50 flex items-center justify-center">
                <div className="text-center p-4 flex items-center">
                  <div className="w-1/5 h-32 bg-white rounded-lg shadow"></div>
                  <div className="w-4/5 h-32 bg-white rounded-lg shadow ml-2 flex flex-col">
                    <div className="h-8 bg-gray-50 flex items-center px-3">
                      <div className="h-2 w-10 bg-gray-200 rounded-full mr-2"></div>
                      <div className="h-2 w-10 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="h-14 w-14 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Visual Studio</h3>
                <p className="text-gray-600 mb-4">
                  Our most intuitive and streamlined interface with drag & drop editing, industry templates, and direct visual editing.
                </p>
                <Link 
                  href="/studio/visual" 
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  Try Visual Studio
                  <IconArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose a Template</h3>
              <p className="text-gray-600">
                Select a template that fits your business type as a starting point.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customize Content & Theme</h3>
              <p className="text-gray-600">
                Personalize your site with your content, branding, and visual preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Export & Deploy</h3>
              <p className="text-gray-600">
                Generate your complete Next.js project and deploy it to your preferred hosting platform.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/studio" 
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium inline-flex items-center justify-center transition-colors"
            >
              Try It Now
              <IconArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <h3 className="text-lg font-bold">Next.js Template Site Generator</h3>
            <p className="text-sm text-gray-600">Build beautiful sites in minutes</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Site Generator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
