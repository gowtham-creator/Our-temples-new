import type { Metadata } from 'next';
import { inter } from '@/lib/fonts';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Our Temples — Discover Sacred Temples of India',
  description: 'Explore a comprehensive directory of Hindu temples across India — their origins, legends, architecture, timings, and how to reach them.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} style={{ scrollBehavior: 'smooth' }}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
