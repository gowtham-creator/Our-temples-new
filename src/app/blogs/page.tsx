import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import FadeIn from '@/components/interactive/FadeIn';
import { blogPosts } from '@/data/blogs';
import styles from './page.module.css';

export default function BlogsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* ======== Header ======== */}
        <FadeIn>
          <div className={styles.header}>
            <div className={styles.headerTop}>
              <Badge
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 256 256"
                    fill="rgb(87,87,87)"
                  >
                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z" />
                  </svg>
                }
                label="Blogs"
              />
              <h3 className="h3">Temple Insights</h3>
            </div>
            <p className={`body-l ${styles.description}`}>
              Stay updated with temple history, festivals, travel guides, and spiritual insights from across India.
            </p>
          </div>
        </FadeIn>

        {/* ======== Blog Grid ======== */}
        <div className={styles.blogGrid}>
          {blogPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.1} scale blur>
              <Link href={`/blogs/${post.slug}`} className={styles.blogCard}>
                <div className={styles.blogImage}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1200px) 33vw, 400px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.blogContent}>
                  <h6 className="h6">{post.title}</h6>
                  <span className={styles.blogDate}>{post.date}</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
