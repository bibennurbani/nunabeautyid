'use client';

import { useState } from 'react';
import Link from 'next/link';
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
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className='sticky top-0 z-50 w-full bg-white shadow-sm'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <Link href='/' className='text-2xl font-bold text-pink-600'>
          Nunabeauty
        </Link>
        <nav className='hidden md:flex space-x-6'>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-gray-600 hover:text-pink-600 transition-colors'>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className='flex items-center space-x-4'>
          <Link
            href='/wishlist'
            className='text-gray-600 hover:text-pink-600 transition-colors'>
            <Heart size={24} />
          </Link>
          <Link
            href='/cart'
            className='text-gray-600 hover:text-pink-600 transition-colors'>
            <ShoppingBag size={24} />
          </Link>
          <Link
            href='/account'
            className='text-gray-600 hover:text-pink-600 transition-colors'>
            <User size={24} />
          </Link>
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
                    className='block py-2 text-lg text-gray-600 hover:text-pink-600 transition-colors'
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
