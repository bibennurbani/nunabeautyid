'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    paymentMethod: 'credit-card',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., process payment, create order)
    console.log('Order submitted:', formData);
    // Redirect to order confirmation page
    // router.push('/order-confirmation')
  };

  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className='text-3xl font-bold mb-8'>Checkout</h1>
      <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <h2 className='text-xl font-semibold mb-4'>Shipping Information</h2>
          <div className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <Label htmlFor='firstName'>First Name</Label>
                <Input
                  id='firstName'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor='lastName'>Last Name</Label>
                <Input
                  id='lastName'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor='address'>Address</Label>
              <Input
                id='address'
                name='address'
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <Label htmlFor='city'>City</Label>
                <Input
                  id='city'
                  name='city'
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor='country'>Country</Label>
                <Input
                  id='country'
                  name='country'
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor='postalCode'>Postal Code</Label>
              <Input
                id='postalCode'
                name='postalCode'
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-4'>Payment Method</h2>
          <RadioGroup defaultValue='credit-card' className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='credit-card' id='credit-card' />
              <Label htmlFor='credit-card'>Credit Card</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='paypal' id='paypal' />
              <Label htmlFor='paypal'>PayPal</Label>
            </div>
          </RadioGroup>
          <div className='mt-8'>
            <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
            {/* Add order summary details here */}
            <div className='border-t pt-4 mt-4'>
              <div className='flex justify-between font-semibold'>
                <span>Total</span>
                <span>$119.98</span>
              </div>
            </div>
          </div>
          <Button type='submit' className='w-full mt-8'>
            Place Order
          </Button>
        </div>
      </form>
    </div>
  );
}
