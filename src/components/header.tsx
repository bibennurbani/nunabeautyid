'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}>
      <div className='container mx-auto px-4 flex items-center justify-between'>
        <Link href='/' className='text-2xl font-bold text-pink-600'>
          Nunabeauty
        </Link>
        <nav className='hidden md:flex space-x-6'>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-gray-600 hover:text-pink-600 transition-colors ${
                pathname === item.href ? 'text-pink-600 font-semibold' : ''
              }`}>
              {item.label}
              {pathname === item.href && (
                <motion.div
                  className='absolute -bottom-1 left-0 right-0 h-0.5 bg-pink-600'
                  layoutId='underline'
                />
              )}
            </Link>
          ))}
        </nav>
        <div className='flex items-center space-x-4'>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href='/wishlist'
              className='text-gray-600 hover:text-pink-600 transition-colors'>
              <Heart size={24} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href='/cart'
              className='text-gray-600 hover:text-pink-600 transition-colors'>
              <ShoppingBag size={24} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href='/account'
              className='text-gray-600 hover:text-pink-600 transition-colors'>
              <User size={24} />
            </Link>
          </motion.div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon' className='md:hidden'>
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigate through our site</SheetDescription>
              </SheetHeader>
              <div className='py-4'>
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block py-2 text-lg ${
                      pathname === item.href
                        ? 'text-pink-600 font-semibold'
                        : 'text-gray-600 hover:text-pink-600'
                    } transition-colors`}
                    onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
