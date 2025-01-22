'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('orders');

  // Mock data
  const orders = [
    { id: '1001', date: '2023-05-15', status: 'Delivered', total: 89.99 },
    { id: '1002', date: '2023-05-10', status: 'Shipped', total: 59.99 },
    { id: '1003', date: '2023-05-05', status: 'Processing', total: 129.99 },
  ];

  const addresses = [
    { id: '1', type: 'Shipping', address: '123 Main St, City, Country' },
    { id: '2', type: 'Billing', address: '456 Elm St, City, Country' },
  ];

  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className='text-3xl font-bold mb-8'>My Account</h1>
      <Tabs defaultValue='orders' className='w-full'>
        <TabsList className='grid w-full grid-cols-3 mb-8'>
          <TabsTrigger value='orders' onClick={() => setActiveTab('orders')}>
            Orders
          </TabsTrigger>
          <TabsTrigger value='addresses' onClick={() => setActiveTab('addresses')}>
            Addresses
          </TabsTrigger>
          <TabsTrigger value='settings' onClick={() => setActiveTab('settings')}>
            Account Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value='orders'>
          <h2 className='text-2xl font-semibold mb-4'>My Orders</h2>
          {orders.map((order) => (
            <Card key={order.id} className='mb-4'>
              <CardHeader>
                <CardTitle>Order #{order.id}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Date: {order.date}</p>
                <p>Status: {order.status}</p>
                <p>Total: ${order.total.toFixed(2)}</p>
                <Button asChild className='mt-2'>
                  <Link href={`/order/${order.id}`}>View Order</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value='addresses'>
          <h2 className='text-2xl font-semibold mb-4'>My Addresses</h2>
          {addresses.map((address) => (
            <Card key={address.id} className='mb-4'>
              <CardHeader>
                <CardTitle>{address.type} Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{address.address}</p>
                <Button variant='outline' className='mt-2'>
                  Edit
                </Button>
              </CardContent>
            </Card>
          ))}
          <Button>Add New Address</Button>
        </TabsContent>
        <TabsContent value='settings'>
          <h2 className='text-2xl font-semibold mb-4'>Account Settings</h2>
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form className='space-y-4'>
                <div>
                  <label htmlFor='name' className='block mb-2'>
                    Name
                  </label>
                  <Input id='name' defaultValue='Jane Doe' />
                </div>
                <div>
                  <label htmlFor='email' className='block mb-2'>
                    Email
                  </label>
                  <Input id='email' type='email' defaultValue='jane@example.com' />
                </div>
                <Button type='submit'>Update Information</Button>
              </form>
            </CardContent>
          </Card>
          <Card className='mt-4'>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
            </CardHeader>
            <CardContent>
              <form className='space-y-4'>
                <div>
                  <label htmlFor='current-password' className='block mb-2'>
                    Current Password
                  </label>
                  <Input id='current-password' type='password' />
                </div>
                <div>
                  <label htmlFor='new-password' className='block mb-2'>
                    New Password
                  </label>
                  <Input id='new-password' type='password' />
                </div>
                <div>
                  <label htmlFor='confirm-password' className='block mb-2'>
                    Confirm New Password
                  </label>
                  <Input id='confirm-password' type='password' />
                </div>
                <Button type='submit'>Change Password</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
