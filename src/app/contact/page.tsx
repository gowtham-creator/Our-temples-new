'use client';

import { motion } from 'motion/react';
import styles from './page.module.css';
import Badge from '@/components/ui/Badge';
import FadeIn from '@/components/interactive/FadeIn';

function LightbulbIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M176 232H80" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M128 232V160" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M88 160H168" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M128 24C97.1 24 72 49.1 72 80C72 101.6 83.9 120.4 101.7 130.6C104.6 132.3 106.7 135.1 107.4 138.4L112 160H144L148.6 138.4C149.3 135.1 151.4 132.3 154.3 130.6C172.1 120.4 184 101.6 184 80C184 49.1 158.9 24 128 24Z" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="48" width="208" height="160" rx="16" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 96L128 160L232 96" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M167.4 39.4C153.4 35.9 138.9 34 124 34C109.1 34 94.6 35.9 80.6 39.4C72.1 41.5 66 49.1 66 57.9V82C66 91.3 72.7 99.3 81.9 100.7C92.5 102.3 103.2 103.1 114 103.1V128.5C88.3 131.4 65.1 144.5 49.4 164.5C44.6 170.5 44.6 179 50 184.5L65.5 200C70.3 204.8 77.3 206.4 83.7 204.1C97.1 199.4 111.4 197 126 197C140.6 197 154.9 199.4 168.3 204.1C174.7 206.4 181.7 204.8 186.5 200L202 184.5C207.4 179 207.4 170.5 202.6 164.5C187 144.5 163.8 131.4 138 128.5V103.1C148.8 103.1 159.5 102.3 170.1 100.7C179.3 99.3 186 91.3 186 82V57.9C186 49.1 179.9 41.5 171.4 39.4H167.4Z" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className={styles.contactPage}>
      <div className={styles.container}>
        <div className={styles.layout}>

          {/* ======== Left Column ======== */}
          <div className={styles.leftColumn}>
            <FadeIn delay={0.1} blur>
              <Badge icon={<LightbulbIcon />} label="Contact us" />
            </FadeIn>

            <div className={styles.headingGroup}>
              <FadeIn delay={0.2} blur>
                <h2 className="h2">24/7 Available</h2>
              </FadeIn>
              <FadeIn delay={0.3} blur>
                <p className={`body-m ${styles.description}`}>
                  You can contact us via email, phone, or by filling out the form on this page. We strive to respond promptly and look forward to connecting with you soon!
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.4} blur>
              <div className={styles.contactDetails}>
                <a href="mailto:example@gmail.com" className={`body-m ${styles.contactItem}`}>
                  <EnvelopeIcon />
                  <span>example@gmail.com</span>
                </a>
                <a href="tel:+15554445456" className={`body-m ${styles.contactItem}`}>
                  <PhoneIcon />
                  <span>+1-555-44-456</span>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* ======== Right Column (Form) ======== */}
          <motion.div
            className={styles.rightColumn}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.formHeading}>
              <h5 className={`h5 ${styles.formTitle}`}>Write us</h5>
              <p className={`body-m ${styles.formSubtitle}`}>We&apos;d love to hear from you!</p>
            </div>

            <form
              className={styles.formFields}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className={styles.fieldRow}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="firstName">First name</label>
                  <input
                    id="firstName"
                    type="text"
                    className={styles.input}
                    placeholder="John"
                    autoComplete="given-name"
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="lastName">Last name</label>
                  <input
                    id="lastName"
                    type="text"
                    className={styles.input}
                    placeholder="Doe"
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className={styles.input}
                  placeholder="john@example.com"
                  autoComplete="email"
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="location">Location</label>
                <input
                  id="location"
                  type="text"
                  className={styles.input}
                  placeholder="City, Country"
                  autoComplete="address-level2"
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
