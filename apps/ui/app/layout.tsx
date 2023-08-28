import { clsx } from 'clsx';
import { Analytics } from '@vercel/analytics/react';
import { Open_Sans } from 'next/font/google';
import './global.css';

export const metadata = {
  title: 'oms.fyi',
  description: 'OMS.fyi is a website.',
};

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <main className={clsx(openSans.variable, 'font-sans h-full')}>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
