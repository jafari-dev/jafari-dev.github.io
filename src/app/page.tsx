'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/en');
  }, [router]);

  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0;url=/en" />
      </head>
      <body style={{ background: '#020209' }} />
    </html>
  );
}
