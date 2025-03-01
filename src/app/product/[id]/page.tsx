'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ProductGrid } from '@/components/products/product-grid';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);

  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id,
    name: 'Modest Activewear Set',
    price: 89.99,
    description:
      'Comfortable and stylish activewear set designed for the modern Muslim woman. Made with breathable, moisture-wicking fabric.',
    images: ['/placeholder.svg?height=600&width=600&text=Product+Image'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Maroon'],
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of product ${id} to cart`);
  };

  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <Image
            src={product.images[0] || '/placeholder.svg'}
            alt={product.name}
            width={600}
            height={600}
            className='rounded-lg'
          />
        </div>
        <div>
          <h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
          <p className='text-2xl font-semibold mb-4'>${product.price.toFixed(2)}</p>
          <p className='mb-6'>{product.description}</p>
          <div className='mb-6'>
            <h2 className='text-lg font-semibold mb-2'>Size</h2>
            <div className='flex space-x-2'>
              {product.sizes.map((size) => (
                <Button key={size} variant='outline'>
                  {size}
                </Button>
              ))}
            </div>
          </div>
          <div className='mb-6'>
            <h2 className='text-lg font-semibold mb-2'>Color</h2>
            <div className='flex space-x-2'>
              {product.colors.map((color) => (
                <Button key={color} variant='outline'>
                  {color}
                </Button>
              ))}
            </div>
          </div>
          <div className='flex items-center space-x-4 mb-6'>
            <Input
              type='number'
              min='1'
              value={quantity}
              onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
              className='w-20'
            />
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          </div>
        </div>
      </div>
      <div className='mt-16'>
        <h2 className='text-2xl font-bold mb-8'>You May Also Like</h2>
        <ProductGrid category='Related Products' />
      </div>
    </div>
  );
}
