'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='relative h-screen flex items-center justify-center overflow-hidden'>
      <video
        autoPlay
        loop
        muted
        className='absolute w-auto min-w-full min-h-full max-w-none'>
        <source src='/placeholder.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='relative z-10 text-center text-white'>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className='text-4xl md:text-6xl font-bold mb-4'>
          Empowering Muslim Women with Confidence and Style
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className='text-xl mb-8'>
          Discover our collection of modest activewear, hijabs, and designer wear
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}>
          <Button asChild size='lg' variant='secondary'>
            <Link href='/shop'>Shop Now</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
