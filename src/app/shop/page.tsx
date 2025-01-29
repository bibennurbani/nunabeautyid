import { ProductGrid } from '@/components/products/product-grid';

export default function ShopPage() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className='text-4xl font-bold mb-8'>Shop Our Collections</h1>
      <ProductGrid category='All Products' />
    </div>
  );
}
