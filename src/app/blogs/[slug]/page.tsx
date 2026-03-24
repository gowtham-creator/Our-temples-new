import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { blogPosts } from '@/data/blogs';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/interactive/FadeIn';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      {/* ======== Blog Post ======== */}
      <div className={styles.page}>
        <div className={styles.container}>
          {/* Back Button */}
          <FadeIn delay={0} direction="none">
            <Link href="/blogs" className={`${styles.back} body-m`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </Link>
          </FadeIn>

          {/* Heading */}
          <FadeIn delay={0.1} blur>
            <div className={styles.heading}>
              <h3 className="h3">{post.title}</h3>
              <p className="body-l" style={{ color: 'var(--dark-2)' }}>{post.date}</p>
            </div>
          </FadeIn>

          {/* Banner Image */}
          <FadeIn delay={0.2} scale>
            <div className={styles.bannerWrap}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.3} blur>
            <div className={`${styles.content} body-m`}>
              Detailed article content coming soon. This is a placeholder for the full blog post content that will cover the topic in depth with rich text, images, and references.
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ======== CTA ======== */}
      <section className={styles.cta}>
        <FadeIn>
          <div className={styles.ctaInner}>
            <div className={styles.ctaTop}>
              <h2 className="h1" style={{ textAlign: 'left' }}>Start your temple journey today!</h2>
              <Button size="lg">Explore Temples</Button>
            </div>
            <div className={styles.ctaBottom}>
              <h5 className="h5">Discover temples near you</h5>
              <p className="body-l">Browse our growing directory of temples across India — with darshan timings, travel info, festivals, and spiritual significance.</p>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
