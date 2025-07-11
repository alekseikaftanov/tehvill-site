import { SEOProps } from '@/types';

export const defaultSEO: SEOProps = {
  title: 'Tehvill - Инновационные решения',
  description: 'Tehvill предлагает инновационные решения для вашего бизнеса. Качественные услуги и современные технологии.',
  keywords: 'Tehvill, инновации, технологии, бизнес решения',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://tehvill.com',
  canonical: 'https://tehvill.com',
};

export const generateSEO = (props: Partial<SEOProps> = {}): SEOProps => {
  return {
    ...defaultSEO,
    ...props,
  };
}; 