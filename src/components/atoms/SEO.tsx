'use client';

import Head from 'next/head';
import { SEOProps } from '@/types';

interface SEOComponentProps extends SEOProps {
  children?: React.ReactNode;
}

export const SEO: React.FC<SEOComponentProps> = ({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
  canonical,
  children,
}) => {
  const fullTitle = title ? `${title} | Tehvill` : 'Tehvill - Инновационные решения';
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {children}
    </Head>
  );
}; 