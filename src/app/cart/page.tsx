'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Mock cart data
const initialCartItems = [
  {
    id: '1',
    name: 'Modest Activewear Set',
    price: 89.99,
    quantity: 1,
    image: '/placeholder.svg?height=100&width=100&text=Product+1',
  },
  {
    id: '2',
    name: 'Elegant Hijab',
    price: 29.99,
    quantity: 2,
    image: '/placeholder.svg?height=100&width=100&text=Product+2',
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className='text-3xl font-bold mb-8'>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty.{' '}
          <Link href='/shop' className='text-pink-600 hover:underline'>
            Continue shopping
          </Link>
        </p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='md:col-span-2'>
            {cartItems.map((item) => (
              <div key={item.id} className='flex items-center border-b py-4'>
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.name}
                  width={100}
                  height={100}
                  className='rounded-md'
                />
                <div className='ml-4 flex-grow'>
                  <h2 className='font-semibold'>{item.name}</h2>
                  <p className='text-gray-600'>${item.price.toFixed(2)}</p>
                </div>
                <div className='flex items-center'>
                  <Input
                    type='number'
                    min='1'
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Number.parseInt(e.target.value))
                    }
                    className='w-16 mr-4'
                  />
                  <Button variant='outline' onClick={() => removeItem(item.id)}>
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className='bg-gray-100 p-6 rounded-lg'>
              <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
              <div className='flex justify-between mb-2'>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className='flex justify-between mb-2'>
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className='border-t pt-2 mt-2'>
                <div className='flex justify-between font-semibold'>
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
              <Button className='w-full mt-4' asChild>
                <Link href='/checkout'>Proceed to Checkout</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
