import { SiteTemplate } from '../../types/templates';

/**
 * Restaurant Website Template
 * 
 * A complete template for restaurants, cafes, and food service businesses
 */
const restaurantTemplate: SiteTemplate = {
  id: 'restaurant',
  name: 'Restaurant & Cafe',
  description: 'A complete website template for restaurants, cafes, and food service businesses',
  category: 'hospitality',
  industryTags: ['restaurant', 'cafe', 'food', 'hospitality'],
  thumbnail: '/thumbs/restaurant-template.jpg',
  
  // Theme configuration
  theme: {
    colorScheme: 'warm',
    typography: 'serif',
    spacing: 'relaxed',
    borderRadius: 'rounded'
  },
  
  // Default placeholder content
  placeholders: {
    businessName: 'Gourmet Bistro',
    tagline: 'Fine dining in a casual atmosphere',
    description: 'We serve locally-sourced, seasonal ingredients prepared with care and creativity.',
    ctaText: 'Make a Reservation',
    ctaUrl: '#reservation',
    phone: '(555) 123-4567',
    email: 'info@gourmetbistro.com',
    address: '123 Culinary Avenue, Foodville, CA 94123',
    openingHours: 'Monday-Sunday: 11am-10pm'
  },
  
  // Default pages for this template
  pages: {
    home: {
      title: 'Home',
      path: '/',
      metaDescription: 'Welcome to Gourmet Bistro - Fine dining in a casual atmosphere',
      sections: [
        {
          type: 'hero',
          variant: 'split',
          anchor: 'welcome',
          content: {
            heading: '{businessName}',
            subheading: '{tagline}',
            description: '{description}',
            cta: {
              primary: {
                text: 'View Menu',
                url: '#menu'
              },
              secondary: {
                text: 'Make a Reservation',
                url: '#reservation'
              }
            },
            image: '/images/restaurant-hero.jpg'
          }
        },
        {
          type: 'features',
          variant: 'grid',
          content: {
            heading: 'Our Specialties',
            subheading: 'Discover the flavors that make us unique',
            features: [
              {
                title: 'Farm-to-Table',
                description: 'We source our ingredients directly from local farms for the freshest flavors.',
                icon: 'leaf'
              },
              {
                title: 'Unique Atmosphere',
                description: 'Our dining space is designed to create a warm and inviting experience.',
                icon: 'home'
              },
              {
                title: 'Award-Winning Chef',
                description: 'Our executive chef brings years of culinary expertise to each dish.',
                icon: 'chef-hat'
              },
              {
                title: 'Seasonal Menu',
                description: 'Our menu changes regularly to capture the best seasonal ingredients.',
                icon: 'calendar'
              }
            ]
          }
        },
        {
          type: 'testimonials',
          variant: 'carousel',
          content: {
            heading: 'What Our Customers Say',
            testimonials: [
              {
                quote: 'The flavors were extraordinary. Best dining experience I\'ve had in years!',
                author: 'Maria J.',
                role: 'Food Enthusiast',
                image: '/images/testimonial-1.jpg',
                rating: 5
              },
              {
                quote: 'Impeccable service, wonderful atmosphere, and truly memorable dishes.',
                author: 'David L.',
                role: 'Local Critic',
                image: '/images/testimonial-2.jpg',
                rating: 5
              },
              {
                quote: 'This place has become our favorite spot for special occasions.',
                author: 'Sarah & Thomas',
                role: 'Regular Customers',
                image: '/images/testimonial-3.jpg',
                rating: 5
              }
            ]
          }
        },
        {
          type: 'cta',
          variant: 'centered',
          anchor: 'reservation',
          content: {
            heading: 'Make a Reservation',
            subheading: 'Join us for an unforgettable dining experience',
            cta: {
              text: 'Book a Table',
              url: '#reservation'
            },
            phone: '{phone}',
            background: '/images/restaurant-bg.jpg'
          }
        }
      ]
    },
    menu: {
      title: 'Our Menu',
      path: '/menu',
      metaDescription: 'Explore our seasonal menu with locally-sourced ingredients',
      sections: [
        {
          type: 'hero',
          variant: 'centered',
          content: {
            heading: 'Our Menu',
            subheading: 'Crafted with passion and the finest ingredients',
            image: '/images/menu-hero.jpg'
          }
        },
        {
          type: 'menu',
          variant: 'tabbed',
          content: {
            heading: 'Select a Category',
            categories: [
              {
                name: 'Appetizers',
                items: [
                  {
                    name: 'Bruschetta',
                    description: 'Toasted bread topped with fresh tomatoes, basil, and olive oil',
                    price: '$9'
                  },
                  {
                    name: 'Calamari',
                    description: 'Lightly fried and served with lemon aioli',
                    price: '$12'
                  },
                  {
                    name: 'Soup of the Day',
                    description: 'Ask your server for today\'s freshly made selection',
                    price: '$8'
                  }
                ]
              },
              {
                name: 'Main Courses',
                items: [
                  {
                    name: 'Grilled Salmon',
                    description: 'With roasted vegetables and herb butter',
                    price: '$26'
                  },
                  {
                    name: 'Pasta Primavera',
                    description: 'Seasonal vegetables in a light cream sauce',
                    price: '$18'
                  },
                  {
                    name: 'Filet Mignon',
                    description: '8oz with mashed potatoes and red wine reduction',
                    price: '$34'
                  }
                ]
              },
              {
                name: 'Desserts',
                items: [
                  {
                    name: 'Chocolate Soufflé',
                    description: 'Warm chocolate soufflé with vanilla ice cream',
                    price: '$10'
                  },
                  {
                    name: 'Crème Brûlée',
                    description: 'Classic vanilla bean custard with caramelized sugar',
                    price: '$9'
                  },
                  {
                    name: 'Seasonal Fruit Tart',
                    description: 'With house-made pastry cream',
                    price: '$8'
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    about: {
      title: 'About Us',
      path: '/about',
      metaDescription: 'Learn about our restaurant\'s history, philosophy, and team',
      sections: [
        {
          type: 'hero',
          variant: 'centered',
          content: {
            heading: 'Our Story',
            subheading: 'The journey of {businessName}',
            image: '/images/about-hero.jpg'
          }
        },
        {
          type: 'content',
          variant: 'two-column',
          content: {
            heading: 'How We Started',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo vel nunc posuere tincidunt. Fusce scelerisque, enim vel feugiat posuere, ipsum nibh semper arcu, vel pulvinar metus nisi vel sem.',
            image: '/images/restaurant-story.jpg'
          }
        },
        {
          type: 'team',
          variant: 'grid',
          content: {
            heading: 'Meet Our Team',
            members: [
              {
                name: 'Chef Michael Roberts',
                role: 'Executive Chef',
                bio: 'With 15 years of experience in fine dining restaurants around the world',
                image: '/images/chef.jpg'
              },
              {
                name: 'Sarah Williams',
                role: 'Pastry Chef',
                bio: 'Known for her unique and creative dessert presentations',
                image: '/images/pastry-chef.jpg'
              },
              {
                name: 'David Chen',
                role: 'Restaurant Manager',
                bio: 'Ensures every guest has an exceptional dining experience',
                image: '/images/manager.jpg'
              }
            ]
          }
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      path: '/contact',
      metaDescription: 'Get in touch with us for reservations, inquiries, or feedback',
      sections: [
        {
          type: 'hero',
          variant: 'minimal',
          content: {
            heading: 'Contact Us',
            subheading: 'We\'d love to hear from you'
          }
        },
        {
          type: 'contact',
          variant: 'split',
          content: {
            heading: 'Get in Touch',
            details: {
              address: '{address}',
              phone: '{phone}',
              email: '{email}',
              hours: '{openingHours}'
            },
            formTitle: 'Send us a Message',
            formFields: [
              { type: 'text', label: 'Name', required: true },
              { type: 'email', label: 'Email', required: true },
              { type: 'text', label: 'Phone', required: false },
              { type: 'select', label: 'Subject', options: ['Reservations', 'Events', 'Feedback', 'Other'], required: true },
              { type: 'textarea', label: 'Message', required: true }
            ]
          }
        },
        {
          type: 'map',
          variant: 'full-width',
          content: {
            address: '{address}'
          }
        }
      ]
    }
  }
};

export default restaurantTemplate;
