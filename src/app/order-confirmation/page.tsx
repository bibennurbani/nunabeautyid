import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function OrderConfirmationPage() {
  // In a real application, you'd fetch the order details based on the order ID
  const orderDetails = {
    id: '1001',
    date: '2023-05-20',
    total: 119.98,
    items: [
      { name: 'Modest Activewear Set', quantity: 1, price: 89.99 },
      { name: 'Elegant Hijab', quantity: 1, price: 29.99 },
    ],
    shippingAddress: '123 Main St, City, Country',
  };

  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className='text-3xl font-bold mb-8'>Order Confirmation</h1>
      <div
        className='bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-8'
        role='alert'>
        <p className='font-bold'>Thank you for your order!</p>
        <p>Your order has been successfully placed and is being processed.</p>
      </div>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-2xl font-semibold mb-4'>Order Details</h2>
        <p>
          <strong>Order Number:</strong> {orderDetails.id}
        </p>
        <p>
          <strong>Order Date:</strong> {orderDetails.date}
        </p>
        <p>
          <strong>Order Total:</strong> ${orderDetails.total.toFixed(2)}
        </p>
        <h3 className='text-xl font-semibold mt-4 mb-2'>Items Ordered</h3>
        <ul className='list-disc pl-5 mb-4'>
          {orderDetails.items.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity}, Price: ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <h3 className='text-xl font-semibold mt-4 mb-2'>Shipping Address</h3>
        <p>{orderDetails.shippingAddress}</p>
      </div>
      <div className='flex justify-between'>
        <Button asChild>
          <Link href='/shop'>Continue Shopping</Link>
        </Button>
        <Button asChild variant='outline'>
          <Link href='/dashboard'>View Order History</Link>
        </Button>
      </div>
    </div>
  );
}
