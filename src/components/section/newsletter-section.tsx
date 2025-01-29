'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function NewsletterSection() {
  return (
    <section className='py-16 bg-pink-50'>
      <div className='container mx-auto px-4 text-center'>
        <motion.h2 {...fadeInUp} className='text-3xl font-bold mb-4'>
          Subscribe to Our Newsletter
        </motion.h2>
        <motion.p {...fadeInUp} className='text-gray-600 mb-8'>
          Stay updated with our latest collections and exclusive offers.
        </motion.p>
        <motion.form {...fadeInUp} className='max-w-md mx-auto flex'>
          <input
            type='email'
            placeholder='Your email address'
            className='flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-600'
          />
          <Button type='submit' className='rounded-l-none'>
            Subscribe
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
