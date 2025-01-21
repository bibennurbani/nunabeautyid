import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nunabeauty - Empowering Muslim Women with Confidence and Style',
  description:
    'Modern e-commerce website for modest fashion, activewear, hijabs, and designer wear for Muslim women.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
