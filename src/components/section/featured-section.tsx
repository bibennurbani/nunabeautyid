'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductGrid } from '../products/product-grid';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function FeaturedSection() {
  const [activeTab, setActiveTab] = useState('activewear');
  console.log('🚀 ~ FeaturedSection ~ activeTab:', activeTab);

  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <motion.h2 {...fadeInUp} className='text-3xl font-bold text-center mb-12'>
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
  );
}
