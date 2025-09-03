import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: 'NICKETING — Marketing that drives results',
  description: 'Strategy, design, websites, content, and lead generation for sport, NGOs, tech, and ventures.',
  openGraph: {
    title: 'NICKETING — Marketing that drives results',
    description: 'Strategy, design, websites, content, and lead generation for sport, NGOs, tech, and ventures.',
    url: 'https://nicketing.com',
    siteName: 'NICKETING',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NICKETING — Marketing that drives results',
    description: 'Strategy, design, websites, content, and lead generation for sport, NGOs, tech, and ventures.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NICKETING',
  url: 'https://nicketing.com',
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
