import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: '5 Modest Activewear Trends for 2023',
    excerpt:
      'Discover the latest modest activewear trends that combine style and functionality.',
  },
  {
    id: 2,
    title: 'How to Style Your Hijab for Different Occasions',
    excerpt:
      'Learn versatile hijab styling techniques for work, casual outings, and special events.',
  },
  {
    id: 3,
    title: 'The Rise of Sustainable Fashion in the Muslim World',
    excerpt:
      'Explore how sustainable fashion is making waves in the Muslim fashion industry.',
  },
];

export default function BlogPage() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className='text-4xl font-bold mb-8'>Nunabeauty Blog</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
