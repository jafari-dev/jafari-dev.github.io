import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://jafari.dev'),
  title: {
    default: 'Ahmad Jafari – Senior Front-end Engineer',
    template: '%s | Ahmad Jafari',
  },
  description:
    'Front-end Engineer with 7+ years of experience building high-performance web apps. Specializing in React, Next.js, TypeScript, and software architecture.',
  keywords: ['Ahmad Jafari', 'Front-end Engineer', 'React', 'Next.js', 'TypeScript', 'Software Architect'],
  authors: [{ name: 'Ahmad Jafari', url: 'https://jafari.dev' }],
  creator: 'Ahmad Jafari',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jafari.dev',
    siteName: 'Ahmad Jafari',
    title: 'Ahmad Jafari – Senior Front-end Engineer',
    description: 'Front-end Engineer with 7+ years building high-performance web apps.',
    images: [{ url: '/avatar.jpg', width: 1024, height: 1024, alt: 'Ahmad Jafari' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmad Jafari – Senior Front-end Engineer',
    description: 'Front-end Engineer · React · Next.js · TypeScript',
    images: ['/avatar.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://jafari.dev' },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const messages = await getMessages();
  const fontVars = [inter.variable, spaceGrotesk.variable, jetbrainsMono.variable].join(' ');

  return (
    <html lang="en" suppressHydrationWarning className={fontVars}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ahmad Jafari',
              url: 'https://jafari.dev',
              image: 'https://jafari.dev/avatar.jpg',
              jobTitle: 'Senior Front-end Engineer',
              worksFor: { '@type': 'Organization', name: 'Partnerz' },
              sameAs: [
                'https://github.com/jafari-dev',
                'https://www.linkedin.com/in/jafari-dev/',
              ],
              email: 'a99jafari@gmail.com',
              address: { '@type': 'PostalAddress', addressLocality: 'Tehran', addressCountry: 'IR' },
            }),
          }}
        />
      </head>
      <body className="bg-slate-50 text-slate-800 dark:bg-transparent dark:text-slate-200 transition-colors duration-300 antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <NextIntlClientProvider messages={messages} locale="en">
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
