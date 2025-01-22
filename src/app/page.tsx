import { FeaturedSection } from '@/components/section/featured-section';
import { HeroSection } from '@/components/section/hero-secrion';
import { NewsletterSection } from '@/components/section/newsletter-section';
import { TestimonialSection } from '@/components/section/testimonial-section';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <TestimonialSection />
      <NewsletterSection />
    </div>
  );
}
