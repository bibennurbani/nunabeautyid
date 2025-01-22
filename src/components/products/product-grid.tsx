'use client';

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

interface Product {
  id: number;
  name: string;
  description: string;
}

interface ProductGridProps {
  category: string;
}

export function ProductGrid({ category }: ProductGridProps) {
  const products: Product[] = [
    {
      id: 1,
      name: `${category} Product 1`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: `${category} Product 2`,
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      name: `${category} Product 3`,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
  ];

  return (
    <motion.div
      variants={staggerChildren}
      initial='initial'
      animate='animate'
      className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      {products.map((product) => (
        <motion.div key={product.id} variants={fadeInUp}>
          <Card>
            <CardHeader>
              <Image
                src={`/placeholder.svg?height=300&width=400&text=${category}+${product.id}`}
                alt={product.name}
                width={400}
                height={300}
                className='rounded-t-lg object-cover'
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <p className='text-gray-600'>{product.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/product/${product.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
