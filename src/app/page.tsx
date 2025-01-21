'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('activewear');

  return (
    <div>
      {/* Hero Section */}
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

      {/* Featured Products Section */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <motion.h2 {...fadeIn} className='text-3xl font-bold text-center mb-12'>
            Featured Collections
          </motion.h2>
          <Tabs defaultValue='activewear' className='w-full'>
            <TabsList className='grid w-full grid-cols-3 mb-8'>
              <TabsTrigger value='activewear' onClick={() => setActiveTab('activewear')}>
                Activewear
              </TabsTrigger>
              <TabsTrigger value='hijabs' onClick={() => setActiveTab('hijabs')}>
                Hijabs
              </TabsTrigger>
              <TabsTrigger value='designer' onClick={() => setActiveTab('designer')}>
                Designer Wear
              </TabsTrigger>
            </TabsList>
            <TabsContent value='activewear'>
              <ProductGrid category='Activewear' />
            </TabsContent>
            <TabsContent value='hijabs'>
              <ProductGrid category='Hijabs' />
            </TabsContent>
            <TabsContent value='designer'>
              <ProductGrid category='Designer Wear' />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.h2 {...fadeIn} className='text-3xl font-bold text-center mb-12'>
            What Our Customers Say
          </motion.h2>
          <motion.div
            variants={staggerChildren}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[1, 2, 3].map((testimonial) => (
              <motion.div key={testimonial} variants={fadeIn}>
                <Card>
                  <CardContent className='pt-6'>
                    <p className='text-gray-600 mb-4'>
                      "Nunabeauty has transformed my wardrobe. Their activewear is not
                      only stylish but also perfectly modest. I feel confident and
                      comfortable in every piece."
                    </p>
                    <p className='font-bold'>- Amina S.</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='py-16 bg-pink-50'>
        <div className='container mx-auto px-4 text-center'>
          <motion.h2 {...fadeIn} className='text-3xl font-bold mb-4'>
            Subscribe to Our Newsletter
          </motion.h2>
          <motion.p {...fadeIn} className='text-gray-600 mb-8'>
            Stay updated with our latest collections and exclusive offers.
          </motion.p>
          <motion.form {...fadeIn} className='max-w-md mx-auto flex'>
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
    </div>
  );
}

function ProductGrid({ category }: { category: string }) {
  return (
    <motion.div
      variants={staggerChildren}
      initial='initial'
      animate='animate'
      className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      {[1, 2, 3].map((product) => (
        <motion.div key={product} variants={fadeIn}>
          <Card>
            <CardHeader>
              <Image
                src={`/placeholder.svg?height=300&width=400&text=${category}+${product}`}
                alt={`${category} ${product}`}
                width={400}
                height={300}
                className='rounded-t-lg object-cover'
              />
            </CardHeader>
            <CardContent>
              <CardTitle>
                {category} Product {product}
              </CardTitle>
              <p className='text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/product/${product}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
