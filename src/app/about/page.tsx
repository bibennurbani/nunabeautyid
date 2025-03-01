import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className='text-4xl font-bold mb-8'>About Nunabeauty</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <p className='mb-4'>
            Nunabeauty was founded with a vision to empower Muslim women through fashion.
            We believe that modesty and style can go hand in hand, and our collections are
            a testament to this belief.
          </p>
          <p className='mb-4'>
            Our journey began when our founder, Nuraisha Nazafarin, recognized the need
            for fashionable yet modest clothing options for active Muslim women. What
            started as a small passion project has now grown into a beloved brand, serving
            women across the globe.
          </p>
          <p>
            At Nunabeauty, we&apos;re committed to using high-quality, sustainable
            materials and ethical manufacturing processes. We believe in fashion that not
            only looks good but also feels good - both for the wearer and for our planet.
          </p>
        </div>
        <div>
          <Image
            src='/placeholder.svg?height=400&width=600&text=About+Nunabeauty'
            alt='About Nunabeauty'
            width={600}
            height={400}
            className='rounded-lg shadow-lg'
          />
        </div>
      </div>
    </div>
  );
}
