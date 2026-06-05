import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono, Vazirmatn } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { routing } from '@/i18n/routing';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });
const vazirmatn = Vazirmatn({ subsets: ['arabic'], variable: '--font-vazirmatn' });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFA = locale === 'fa';

  return {
    metadataBase: new URL('https://jafari.dev'),
    title: {
      default: isFA ? 'احمد جعفری – مهندس ارشد فرانت‌اند' : 'Ahmad Jafari – Senior Front-end Engineer',
      template: isFA ? '%s | احمد جعفری' : '%s | Ahmad Jafari',
    },
    description: isFA
      ? 'مهندس فرانت‌اند با ۷+ سال تجربه در React، Next.js و TypeScript. متخصص در معماری نرم‌افزار و بهینه‌سازی عملکرد.'
      : 'Front-end Engineer with 7+ years of experience building high-performance web apps. Specializing in React, Next.js, TypeScript, and software architecture.',
    keywords: isFA
      ? ['احمد جعفری', 'فرانت‌اند', 'ری‌اکت', 'نکست‌جی‌اس', 'تایپ‌اسکریپت']
      : ['Ahmad Jafari', 'Front-end Engineer', 'React', 'Next.js', 'TypeScript', 'Software Architect'],
    authors: [{ name: 'Ahmad Jafari', url: 'https://jafari.dev' }],
    creator: 'Ahmad Jafari',
    openGraph: {
      type: 'website',
      locale: isFA ? 'fa_IR' : 'en_US',
      url: `https://jafari.dev/${locale}`,
      siteName: 'Ahmad Jafari',
      title: isFA ? 'احمد جعفری – مهندس ارشد فرانت‌اند' : 'Ahmad Jafari – Senior Front-end Engineer',
      description: isFA
        ? 'مهندس فرانت‌اند با ۷+ سال تجربه'
        : 'Front-end Engineer with 7+ years building high-performance web apps.',
      images: [{ url: '/avatar.jpg', width: 1024, height: 1024, alt: 'Ahmad Jafari' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isFA ? 'احمد جعفری' : 'Ahmad Jafari – Senior Front-end Engineer',
      description: isFA ? 'مهندس ارشد فرانت‌اند' : 'Front-end Engineer · React · Next.js · TypeScript',
      images: ['/avatar.jpg'],
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://jafari.dev/${locale}`,
      languages: { en: 'https://jafari.dev/en', fa: 'https://jafari.dev/fa' },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const isRTL = locale === 'fa';
  const fontVars = [inter.variable, spaceGrotesk.variable, jetbrainsMono.variable, vazirmatn.variable].join(' ');

  return (
    <html
      lang={locale}
      dir={isRTL ? 'rtl' : 'ltr'}
      suppressHydrationWarning
      className={fontVars}
    >
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
      <body className="bg-slate-50 text-slate-800 dark:bg-dark-950 dark:text-slate-200 transition-colors duration-300 antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
