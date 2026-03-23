import type { Metadata } from 'next';
import { inter } from '@/lib/fonts';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sonic — Immersive Sound, Simplified',
  description: 'Premium speaker experience with exceptional audio performance, toughness, and elegance.',
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
