import { SiteConfig } from '../../types/config';

/**
 * Default configuration for a professional services template
 * This template is designed for consulting firms, agencies, and service providers
 */
const professionalServicesConfig: SiteConfig = {
  metadata: {
    title: 'Professional Services',
    description: 'Expert consulting and professional services for your business.',
    author: 'Site Generator',
    keywords: ['consulting', 'professional services', 'business', 'agency'],
  },
  
  business: {
    name: 'Acme Consulting',
    tagline: 'Strategic solutions for complex challenges',
    contact: {
      email: 'info@example.com',
      phone: '(555) 123-4567',
      address: '123 Business Ave, New York, NY 10001',
    },
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/example', icon: 'brand-twitter' },
      { platform: 'linkedin', url: 'https://linkedin.com/company/example', icon: 'brand-linkedin' },
      { platform: 'facebook', url: 'https://facebook.com/example', icon: 'brand-facebook' },
    ],
    businessHours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM',
      saturday: 'Closed',
      sunday: 'Closed',
    },
  },
  
  theme: {
    colors: {
      primary: '#0062FF',
      secondary: '#6B7280',
      accent: '#10B981',
      background: '#FFFFFF',
      text: '#1F2937',
      heading: '#111827',
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter',
    },
    borderRadius: '0.375rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  },
  
  navigation: {
    links: [
      { text: 'Home', href: '/' },
      { text: 'Services', href: '/services' },
      { text: 'About', href: '/about' },
      { text: 'Contact', href: '/contact' },
    ],
    logo: {
      src: '/images/logo.svg',
      alt: 'Acme Consulting Logo',
    },
    cta: {
      text: 'Get Started',
      href: '/contact',
    },
  },
  
  pages: {
    home: {
      path: '/',
      title: 'Home',
      meta: {
        description: 'Expert consulting and professional services for your business needs.',
      },
      sections: [
        {
          id: 'hero',
          type: 'hero',
          variant: 'centered',
          background: '#f8fafc',
          spacing: {
            top: '2rem',
            bottom: '4rem',
          },
          content: {
            heading: 'Strategic Solutions for Growing Businesses',
            subheading: 'We help companies scale through expert consulting and proven strategies',
            image: '/images/hero.jpg',
            cta: {
              primary: { text: 'Get Started', href: '/contact' },
              secondary: { text: 'Learn More', href: '/services' },
            },
          },
        },
        {
          id: 'services',
          type: 'services',
          variant: 'grid',
          spacing: {
            top: '4rem',
            bottom: '4rem',
          },
          content: {
            heading: 'Our Services',
            subheading: 'Comprehensive solutions for your business needs',
            services: [
              {
                title: 'Strategy Consulting',
                description: 'Long-term planning and market analysis to position your business for success.',
                icon: 'chart-line',
              },
              {
                title: 'Process Optimization',
                description: 'Streamline operations for maximum efficiency and reduced costs.',
                icon: 'settings',
              },
              {
                title: 'Digital Transformation',
                description: 'Modernize your business with cutting-edge technology and digital solutions.',
                icon: 'device-laptop',
              },
              {
                title: 'Financial Advisory',
                description: 'Expert financial guidance to improve profitability and manage resources.',
                icon: 'coin',
              },
              {
                title: 'Market Research',
                description: 'Data-driven insights to understand your customers and competitors.',
                icon: 'chart-bar',
              },
              {
                title: 'Leadership Development',
                description: 'Cultivate strong leadership skills throughout your organization.',
                icon: 'users',
              },
            ],
          },
        },
        {
          id: 'about',
          type: 'about',
          variant: 'split',
          background: '#f8fafc',
          spacing: {
            top: '4rem',
            bottom: '4rem',
          },
          content: {
            heading: 'About Us',
            subheading: 'Over 10 years of excellence in business consulting',
            content: 'Acme Consulting was founded with a mission to help businesses reach their full potential. Our team of experienced consultants brings deep industry knowledge and a passion for driving results. We work closely with our clients to understand their unique challenges and develop tailored solutions that deliver measurable impact.',
            image: '/images/about.jpg',
            stats: [
              { value: '10+', label: 'Years Experience' },
              { value: '200+', label: 'Clients Served' },
              { value: '95%', label: 'Client Satisfaction' },
            ],
          },
        },
        {
          id: 'testimonials',
          type: 'testimonials',
          variant: 'carousel',
          spacing: {
            top: '4rem',
            bottom: '4rem',
          },
          content: {
            heading: 'Client Testimonials',
            subheading: 'What our clients say about our services',
            testimonials: [
              {
                quote: 'Acme Consulting transformed our operations and helped us achieve 30% growth in just one year. Their strategic guidance was invaluable to our success.',
                author: 'Jane Smith',
                role: 'CEO',
                company: 'TechStart Inc.',
                avatar: '/images/testimonials/jane.jpg',
                rating: 5,
              },
              {
                quote: 'The team at Acme provided clear, actionable insights that helped us navigate a challenging market transition. Highly recommended.',
                author: 'John Davis',
                role: 'COO',
                company: 'Global Manufacturing',
                avatar: '/images/testimonials/john.jpg',
                rating: 5,
              },
              {
                quote: 'Working with Acme Consulting was a game-changer for our business. They understood our challenges and delivered solutions that actually worked.',
                author: 'Sarah Johnson',
                role: 'Director of Operations',
                company: 'Retail Solutions',
                avatar: '/images/testimonials/sarah.jpg',
                rating: 5,
              },
            ],
          },
        },
        {
          id: 'cta',
          type: 'cta',
          variant: 'simple',
          background: '#0062FF',
          spacing: {
            top: '4rem',
            bottom: '4rem',
          },
          content: {
            heading: 'Ready to transform your business?',
            subheading: 'Schedule a free consultation with our experts today.',
            cta: {
              text: 'Contact Us',
              href: '/contact',
            },
          },
        },
      ],
    },
    services: {
      path: '/services',
      title: 'Services',
      meta: {
        description: 'Comprehensive business consulting services to help your company grow and succeed.',
      },
      sections: [
        {
          id: 'hero',
          type: 'hero',
          variant: 'simple',
          background: '#f8fafc',
          spacing: {
            top: '2rem',
            bottom: '4rem',
          },
          content: {
            heading: 'Our Services',
            subheading: 'Comprehensive solutions tailored to your business needs',
          },
        },
        {
          id: 'services-detail',
          type: 'services',
          variant: 'detailed',
          spacing: {
            top: '4rem',
            bottom: '4rem',
          },
          content: {
            heading: 'How We Can Help',
            subheading: 'Our comprehensive suite of professional services',
            services: [
              {
                title: 'Strategy Consulting',
                description: 'We help you develop a clear vision and roadmap for your business growth. Our strategic consulting services include market analysis, competitive positioning, and long-term planning to ensure sustainable success.',
                icon: 'chart-line',
                image: '/images/services/strategy.jpg',
              },
              {
                title: 'Process Optimization',
                description: 'Streamline your operations and eliminate inefficiencies. We analyze your current workflows and implement proven methodologies to enhance productivity, reduce costs, and improve overall business performance.',
                icon: 'settings',
                image: '/images/services/process.jpg',
              },
              {
                title: 'Digital Transformation',
                description: 'Embrace the digital future with confidence. Our digital transformation services help you leverage technology to create new business models, enhance customer experiences, and gain competitive advantage.',
                icon: 'device-laptop',
                image: '/images/services/digital.jpg',
              },
              {
                title: 'Financial Advisory',
                description: 'Make informed financial decisions with expert guidance. We provide comprehensive financial analysis, forecasting, and planning to optimize your resource allocation and maximize returns on investment.',
                icon: 'coin',
                image: '/images/services/financial.jpg',
              },
            ],
          },
        },
        {
          id: 'cta',
          type: 'cta',
          variant: 'simple',
          background: '#0062FF',
          spacing: {
            top: '4rem',
            bottom: '4rem',
          },
          content: {
            heading: 'Need a custom solution?',
            subheading: 'Contact us to discuss your specific business challenges.',
            cta: {
              text: 'Get in Touch',
              href: '/contact',
            },
          },
        },
      ],
    },
    about: {
      path: '/about',
      title: 'About',
      meta: {
        description: 'Learn about our company, our mission, and our expert team of consultants.',
      },
      sections: [
        {
          id: 'hero',
          type: 'hero',
          variant: 'simple',
          background: '#f8fafc',
          spacing: {
            top: '2rem',
            bottom: '4rem',
          },
          content: {
            heading: 'About Acme Consulting',
            subheading: 'A team of experts dedicated to your business success',
          },
        },
        {
          id: 'about-detail',
          type: 'about',
          variant: 'full',
          spacing: {
            top: '4rem',
            bottom: '4rem',
          },
          content: {
            heading: 'Our Story',
            content: 'Founded in 2010, Acme Consulting began with a simple mission: to help businesses reach their full potential. What started as a small team of passionate consultants has grown into a leading consulting firm with a global reach. We\'ve maintained our commitment to personalized service while expanding our capabilities to address the evolving challenges of modern business. Our success is measured by the success of our clients, and we take pride in contributing to their achievements. Today, we continue to innovate and adapt our approaches to deliver exceptional value and drive meaningful results for businesses of all sizes.',
            image: '/images/about-detail.jpg',
          },
        },
        {
          id: 'team',
          type: 'team',
          variant: 'grid',
          background: '#f8fafc',
          spacing: {
            top: '4rem',
            bottom: '4rem',
          },
          content: {
            heading: 'Our Leadership Team',
            subheading: 'Meet the experts behind our success',
            team: [
              {
                name: 'Alex Rodriguez',
                role: 'CEO & Founder',
                bio: 'Alex has over 20 years of experience in business strategy and management consulting.',
                avatar: '/images/team/alex.jpg',
                socialLinks: [
                  { platform: 'linkedin', url: 'https://linkedin.com/in/example', icon: 'brand-linkedin' },
                  { platform: 'twitter', url: 'https://twitter.com/example', icon: 'brand-twitter' },
                ],
              },
              {
                name: 'Morgan Chen',
                role: 'Chief Strategy Officer',
                bio: 'Morgan specializes in market analysis and strategic planning for enterprise clients.',
                avatar: '/images/team/morgan.jpg',
                socialLinks: [
                  { platform: 'linkedin', url: 'https://linkedin.com/in/example', icon: 'brand-linkedin' },
                ],
              },
              {
                name: 'Taylor Washington',
                role: 'Director of Operations',
                bio: 'Taylor leads our process optimization practice with expertise in lean methodologies.',
                avatar: '/images/team/taylor.jpg',
                socialLinks: [
                  { platform: 'linkedin', url: 'https://linkedin.com/in/example', icon: 'brand-linkedin' },
                ],
              },
              {
                name: 'Jordan Patel',
                role: 'Head of Digital Solutions',
                bio: 'Jordan brings deep technical knowledge to our digital transformation services.',
                avatar: '/images/team/jordan.jpg',
                socialLinks: [
                  { platform: 'linkedin', url: 'https://linkedin.com/in/example', icon: 'brand-linkedin' },
                  { platform: 'github', url: 'https://github.com/example', icon: 'brand-github' },
                ],
              },
            ],
          },
        },
        {
          id: 'values',
          type: 'values',
          variant: 'grid',
          spacing: {
            top: '4rem',
            bottom: '4rem',
          },
          content: {
            heading: 'Our Core Values',
            subheading: 'The principles that guide our work',
            values: [
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in all aspects of our work.',
                icon: 'award',
              },
              {
                title: 'Integrity',
                description: 'We build relationships based on trust, transparency, and ethical conduct.',
                icon: 'shield',
              },
              {
                title: 'Innovation',
                description: 'We continuously seek new and better ways to solve complex challenges.',
                icon: 'bulb',
              },
              {
                title: 'Collaboration',
                description: 'We work closely with our clients as true partners in their success.',
                icon: 'users',
              },
            ],
          },
        },
        {
          id: 'cta',
          type: 'cta',
          variant: 'simple',
          background: '#0062FF',
          spacing: {
            top: '4rem',
            bottom: '4rem',
          },
          content: {
            heading: 'Join our team of experts',
            subheading: 'View current openings and career opportunities.',
            cta: {
              text: 'View Careers',
              href: '/careers',
            },
          },
        },
      ],
    },
    contact: {
      path: '/contact',
      title: 'Contact',
      meta: {
        description: 'Get in touch with our team to discuss how we can help your business.',
      },
      sections: [
        {
          id: 'hero',
          type: 'hero',
          variant: 'simple',
          background: '#f8fafc',
          spacing: {
            top: '2rem',
            bottom: '4rem',
          },
          content: {
            heading: 'Contact Us',
            subheading: 'We\'d love to hear from you',
          },
        },
        {
          id: 'contact-form',
          type: 'contact',
          variant: 'split',
          spacing: {
            top: '4rem',
            bottom: '4rem',
          },
          content: {
            heading: 'Get in Touch',
            subheading: 'Fill out the form below and we\'ll get back to you shortly',
            email: 'info@example.com',
            phone: '(555) 123-4567',
            address: '123 Business Ave, New York, NY 10001',
            mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215651158061!2d-73.98787484959428!3d40.75790544251342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b306a9d7%3A0x3cd2f43f6cce04c0!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus',
            formFields: [
              {
                name: 'name',
                label: 'Full Name',
                type: 'text',
                required: true,
                placeholder: 'John Doe',
              },
              {
                name: 'email',
                label: 'Email Address',
                type: 'email',
                required: true,
                placeholder: 'john@example.com',
              },
              {
                name: 'phone',
                label: 'Phone Number',
                type: 'tel',
                required: false,
                placeholder: '(555) 123-4567',
              },
              {
                name: 'company',
                label: 'Company Name',
                type: 'text',
                required: false,
                placeholder: 'Acme Inc.',
              },
              {
                name: 'message',
                label: 'Message',
                type: 'textarea',
                required: true,
                placeholder: 'How can we help you?',
              },
            ],
          },
        },
        {
          id: 'faq',
          type: 'faq',
          variant: 'simple',
          background: '#f8fafc',
          spacing: {
            top: '4rem',
            bottom: '4rem',
          },
          content: {
            heading: 'Frequently Asked Questions',
            subheading: 'Find quick answers to common questions',
            questions: [
              {
                question: 'What types of businesses do you work with?',
                answer: 'We work with businesses of all sizes across various industries. Our clients range from startups to established enterprises in technology, healthcare, finance, manufacturing, and more.',
              },
              {
                question: 'How long does a typical consulting project take?',
                answer: 'Project durations vary depending on scope and complexity. Some engagements may be completed in a few weeks, while others may span several months. We\'ll provide a clear timeline during our initial consultation.',
              },
              {
                question: 'Do you offer virtual consulting services?',
                answer: 'Yes, we offer both in-person and virtual consulting services to accommodate clients worldwide. Our virtual engagements maintain the same level of quality and personal attention.',
              },
              {
                question: 'How do you measure the success of your consulting services?',
                answer: 'We establish clear metrics and key performance indicators (KPIs) at the outset of each project. These may include revenue growth, cost reduction, improved efficiency, or other business outcomes relevant to your goals.',
              },
            ],
          },
        },
      ],
    },
  },
};

export default professionalServicesConfig;
