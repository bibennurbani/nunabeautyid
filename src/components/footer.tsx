import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-100 py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='font-bold text-lg mb-4'>Shop</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/shop/activewear'
                  className='text-gray-600 hover:text-pink-600'>
                  Activewear
                </Link>
              </li>
              <li>
                <Link href='/shop/hijabs' className='text-gray-600 hover:text-pink-600'>
                  Hijabs
                </Link>
              </li>
              <li>
                <Link
                  href='/shop/designer-wear'
                  className='text-gray-600 hover:text-pink-600'>
                  Designer Wear
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-lg mb-4'>About</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/about' className='text-gray-600 hover:text-pink-600'>
                  Our Story
                </Link>
              </li>
              <li>
                <Link href='/blog' className='text-gray-600 hover:text-pink-600'>
                  Blog
                </Link>
              </li>
              <li>
                <Link href='/contact' className='text-gray-600 hover:text-pink-600'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-lg mb-4'>Customer Service</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/faq' className='text-gray-600 hover:text-pink-600'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href='/shipping' className='text-gray-600 hover:text-pink-600'>
                  Shipping
                </Link>
              </li>
              <li>
                <Link href='/returns' className='text-gray-600 hover:text-pink-600'>
                  Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-lg mb-4'>Newsletter</h3>
            <p className='text-gray-600 mb-4'>
              Subscribe to our newsletter for updates and promotions.
            </p>
            <form className='flex'>
              <input
                type='email'
                placeholder='Your email'
                className='flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-600'
              />
              <button
                type='submit'
                className='bg-pink-600 text-white px-4 py-2 rounded-r-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-200 text-center text-gray-600'>
          © 2023 Nunabeauty. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
