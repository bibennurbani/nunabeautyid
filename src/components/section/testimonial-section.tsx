'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
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

export function TestimonialSection() {
  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        <motion.h2 {...fadeInUp} className='text-3xl font-bold text-center mb-12'>
          What Our Customers Say
        </motion.h2>
        <motion.div
          variants={staggerChildren}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {[1, 2, 3].map((testimonial) => (
            <motion.div key={testimonial} variants={fadeInUp}>
              <Card>
                <CardContent className='pt-6'>
                  <p className='text-gray-600 mb-4'>
                    &quot;Nunabeauty has transformed my wardrobe. Their activewear is not
                    only stylish but also perfectly modest. I feel confident and
                    comfortable in every piece.&quot;
                  </p>
                  <p className='font-bold'>- Amina S.</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
