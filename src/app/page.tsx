import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import FadeIn from '@/components/interactive/FadeIn';
import ParallaxImage from '@/components/interactive/ParallaxImage';
import FAQItem from '@/components/interactive/FAQItem';
import ImageCarousel from '@/components/interactive/ImageCarousel';
import HeroImage from '@/components/interactive/HeroImage';
import TextReveal from '@/components/interactive/TextReveal';
import SmoothScroll from '@/components/interactive/SmoothScroll';
import { stats } from '@/data/stats';
import { faqItems } from '@/data/faq';
import { blogPosts } from '@/data/blogs';

export default function Home() {
  return (
    <main>
      <SmoothScroll />

      {/* ======== Hero ======== */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroHeading}>
            <TextReveal className="h1">Immersive Sound, Simplified</TextReveal>
            <FadeIn delay={0.4} blur>
              <p className="body-l">
                Our most recent breakthrough in audio devices blends exceptional audio performance with unparalleled toughness and elegance.
              </p>
            </FadeIn>
            <FadeIn delay={0.6} scale>
              <Button>Buy now</Button>
            </FadeIn>
          </div>
          <FadeIn delay={0.3} scale>
            <HeroImage />
          </FadeIn>
        </div>
      </section>

      {/* ======== About ======== */}
      <section id="about" className={styles.about}>
        <div className={styles.aboutInner}>
          <FadeIn delay={0} blur><span className="h2">Our latest innovation</span></FadeIn>
          <FadeIn delay={0.1} scale>
            <span className={styles.inlineImg}>
              <Image src="https://framerusercontent.com/images/ubG0q5oU24cynTwk8AE2YihwtQ4.jpg" alt="" fill sizes="90px" style={{ objectFit: 'cover' }} />
            </span>
          </FadeIn>
          <FadeIn delay={0.15} blur><span className="h2">in portable speakers</span></FadeIn>
          <FadeIn delay={0.2} blur><span className="h2">combines superior sound quality</span></FadeIn>
          <FadeIn delay={0.25} scale>
            <span className={styles.inlineImg}>
              <Image src="https://framerusercontent.com/images/ICfDgHiYeg3CrkgPh0eIAqjfps.jpg" alt="" fill sizes="90px" style={{ objectFit: 'cover' }} />
            </span>
          </FadeIn>
          <FadeIn delay={0.3} blur><span className="h2">with unmatched durability</span></FadeIn>
        </div>
      </section>

      {/* ======== Features 1 ======== */}
      <section id="features" className={styles.features}>
        <div className={styles.featuresRow}>
          <FadeIn direction="left" style={{ flex: 1, display: 'flex' }}>
            <div className={styles.featuresContent}>
              <div className={styles.topWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="rgb(38,38,40)"><path d="M128,16A112,112,0,1,0,240,128,112.12,112.12,0,0,0,128,16Zm0,208A96,96,0,1,1,224,128,96.11,96.11,0,0,1,128,224ZM160,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm-48,32v32a8,8,0,0,1-16,0V128a8,8,0,0,1,16,0Z"/></svg>
                <span className="h6">The Perfect Sound, Anywhere</span>
              </div>
              <h3 className="h4">Experience crystal-clear audio with deep bass and immersive sound.</h3>
              <div className={styles.featuresParagraph}>
                <p className="body-l">Our smart speaker is designed to fill your space with rich, high-fidelity sound—whether you&apos;re at home or on the go.</p>
                <Button>Buy now</Button>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" style={{ flex: 1 }}>
            <ParallaxImage src="https://framerusercontent.com/images/ICfDgHiYeg3CrkgPh0eIAqjfps.jpg" alt="Speaker feature" />
          </FadeIn>
        </div>
      </section>

      {/* ======== Features 2 ======== */}
      <section className={styles.features}>
        <div className={styles.featuresRowReverse}>
          <FadeIn direction="left" style={{ flex: 1 }}>
            <ParallaxImage src="https://framerusercontent.com/images/b2pU6wEvFiNfe0hneAEK9s55W4I.jpg" alt="Speaker feature" />
          </FadeIn>
          <FadeIn direction="right" style={{ flex: 1, display: 'flex' }}>
            <div className={styles.featuresContent}>
              <div className={styles.topWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="rgb(38,38,40)"><path d="M192,56H64A24,24,0,0,0,40,80v96a24,24,0,0,0,24,24H192a24,24,0,0,0,24-24V80A24,24,0,0,0,192,56Zm8,120a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8ZM160,128a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h48A8,8,0,0,1,160,128Z"/></svg>
                <span className="h6">Smart. Sleek. Powerful.</span>
              </div>
              <h3 className="h4">Seamless connectivity, voice control, and a sleek, modern design make this speaker the perfect addition to any room.</h3>
              <div className={styles.featuresParagraph}>
                <p className="body-l">Designed for modern living, this speaker blends premium sound with intuitive controls.</p>
                <Button>Buy now</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ======== Stats ======== */}
      <section className={styles.stats}>
        <div className={styles.statsContainer}>
          <FadeIn>
            <div className={styles.statsHeading}>
              <div className={styles.statsLeft}>
                <Badge icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="rgb(87,87,87)"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"/></svg>} label="Why us?" />
                <h3 className="h3">Trusted by Thousands, Engineered for Excellence</h3>
              </div>
              <p className="body-l" style={{ flex: 1 }}>Our commitment to innovation and quality has earned the trust of customers worldwide. Sleek design, our products are built to impress.</p>
            </div>
          </FadeIn>
          <div className={styles.statsCards}>
            {stats.map((stat, i) => (
              <FadeIn key={stat.title} delay={i * 0.2} scale blur>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="rgb(87,87,87)">
                      {stat.icon === 'shopping-bag' && <path d="M216,64H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48V64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8V64H96ZM216,200H40V80H216Z"/>}
                      {stat.icon === 'star' && <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166.86,79.4l-23.2-55.36a16,16,0,0,0-31.32,0L89.14,79.4l-58.53,6.85a16,16,0,0,0-9.11,28.06L65.36,155.4l-13.16,58a16,16,0,0,0,23.89,17.38L128,198.49l51.91,32.32a16,16,0,0,0,23.89-17.38l-13.16-58L234.5,114.35A16,16,0,0,0,239.2,97.29Z"/>}
                      {stat.icon === 'flag' && <path d="M42.76,50A8,8,0,0,0,40,56V176a8,8,0,0,0,3.2,6.4L104,228a8,8,0,0,0,9.6-12.8L56,172V62.13l80,60V232a8,8,0,0,0,16,0V122.13l80-60V172l-57.6,43.2a8,8,0,0,0,9.6,12.8l60.8-45.6A8,8,0,0,0,248,176V56a8,8,0,0,0-12.8-6.4L136,122.13,36.8,48.4A8,8,0,0,0,42.76,50Z"/>}
                    </svg>
                  </div>
                  <div className={styles.featureCardContent}>
                    <h5 className="h5">{stat.title}</h5>
                    <p className="body-l">{stat.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ======== Product ======== */}
      <section id="product" className={styles.product}>
        <div className={styles.productContainer}>
          <FadeIn>
            <div className={styles.statsHeading}>
              <div className={styles.statsLeft}>
                <Badge icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="rgb(87,87,87)"><path d="M232,108a8,8,0,0,0-4.39-7.14l-24.48-12.25L191.49,55.2A8,8,0,0,0,184,48H72a8,8,0,0,0-7.49,7.2L52.87,88.61,28.39,100.86A8,8,0,0,0,24,108v40a8,8,0,0,0,8,8H48a32,32,0,0,0,64,0h32a32,32,0,0,0,64,0h16a8,8,0,0,0,8-8V108Z"/></svg>} label="In reality" />
                <h3 className="h3">Timeless Elegance</h3>
              </div>
              <p className="body-l" style={{ flex: 1 }}>Enhance your space with a perfect blend of modern design and warm ambiance. Our speaker bring style and sophistication</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <ImageCarousel />
          </FadeIn>
        </div>
      </section>

      {/* ======== FAQ ======== */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <FadeIn className={styles.faqHeading}>
            <h5 className="h5">Welcome to Beyond FAQ!</h5>
            <h3 className="h3">Everything You Need to Know About Our Speakers</h3>
          </FadeIn>
          <div className={styles.faqList}>
            {faqItems.map((item, i) => (
              <FadeIn key={item.question} delay={i * 0.1}>
                <FAQItem question={item.question} answer={item.answer} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ======== Blog ======== */}
      <section className={styles.blog}>
        <div className={styles.blogContainer}>
          <FadeIn>
            <div className={styles.statsHeading}>
              <div className={styles.statsLeft}>
                <Badge icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="rgb(87,87,87)"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H76.75A47.93,47.93,0,0,0,72,64v8a8,8,0,0,0,8,8H176a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-4.75-16H200Z"/></svg>} label="Blogs" />
                <h3 className="h3">Sound Insights</h3>
              </div>
              <p className="body-l" style={{ flex: 1 }}>Stay updated with the latest trends in audio technology, speaker innovations, and expert tips to enhance your listening experience.</p>
            </div>
          </FadeIn>
          <div className={styles.blogGrid}>
            {blogPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.2} scale blur>
                <a href={`/blogs/${post.slug}`} className={styles.blogCard}>
                  <div className={styles.blogImage}>
                    <Image src={post.image} alt={post.title} fill sizes="400px" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className={styles.blogContent}>
                    <h6 className="h6">{post.title}</h6>
                    <span className={styles.blogDate}>{post.date}</span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <section className={styles.cta}>
        <FadeIn>
          <div className={styles.ctaInner}>
            <div className={styles.ctaTop}>
              <h2 className="h1" style={{ textAlign: 'left' }}>Get your perfect speaker now!</h2>
              <Button size="lg">Get yours - 30% off</Button>
            </div>
            <div className={styles.ctaBottom}>
              <h5 className="h5">Bring every room together</h5>
              <p className="body-l">Experience our latest portable speaker innovation, delivering exceptional sound quality, unbeatable durability, and sleek design.</p>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
