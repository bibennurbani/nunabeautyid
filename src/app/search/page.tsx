'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ProductGrid } from '@/components/products/product-grid';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you'd perform the search here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className='text-3xl font-bold mb-8'>Search Products</h1>
      <form onSubmit={handleSearch} className='mb-8'>
        <div className='flex gap-2'>
          <Input
            type='text'
            placeholder='Search for products...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='flex-grow'
          />
          <Button type='submit'>Search</Button>
        </div>
      </form>
      <div>
        <h2 className='text-2xl font-semibold mb-4'>Search Results</h2>
        <ProductGrid category='Search Results' />
      </div>
    </div>
  );
}
