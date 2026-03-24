import styles from './page.module.css';
import Badge from '@/components/ui/Badge';
import FadeIn from '@/components/interactive/FadeIn';

function CalendarBlankIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="40" width="176" height="176" rx="8" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M176 24V56" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M80 24V56" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M40 88H216" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function TermsOfServicePage() {
  return (
    <main className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>

          {/* ======== Header ======== */}
          <div className={styles.heading}>
            <FadeIn delay={0.1} blur>
              <Badge icon={<CalendarBlankIcon />} label="14 Jan 2025" />
            </FadeIn>
            <FadeIn delay={0.2} blur>
              <h1 className="h1">Terms of Service</h1>
            </FadeIn>
          </div>

          {/* ======== Body ======== */}
          <FadeIn delay={0.3} blur>
            <div className={styles.body}>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using Our Temples (ourtemples.info), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained on this website are protected by applicable copyright and trademark law.
              </p>
              <p>
                These Terms of Service constitute the entire agreement between you and Our Temples regarding your use of the website, superseding any prior agreements between you and Our Temples relating to your use of the website.
              </p>

              <h2>2. Use of the Website</h2>
              <p>
                You may use Our Temples for lawful purposes only and in a manner consistent with all applicable local, national, and international laws and regulations. You agree not to:
              </p>
              <ul>
                <li>Use the website in any way that violates applicable local, national, or international law or regulation.</li>
                <li>Transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material.</li>
                <li>Attempt to gain unauthorised access to any part of the website, the server on which the website is stored, or any server, computer, or database connected to the website.</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website, or which may harm Our Temples or users of the website.</li>
                <li>Use the website to collect or harvest any personally identifiable information.</li>
                <li>Use automated tools, bots, or scrapers to access or extract content from the website without our express written consent.</li>
              </ul>

              <h2>3. Intellectual Property</h2>
              <p>
                All content published and made available on Our Temples is the property of Our Temples and the website's creators. This includes, but is not limited to, images, text, logos, documents, downloadable files, and anything that contributes to the composition of our website.
              </p>
              <p>
                The Our Temples name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Our Temples or its affiliates. You must not use such marks without the prior written permission of Our Temples.
              </p>
              <p>
                You may view, download, and print pages from the website for your own personal, non-commercial use, provided you do not modify the content in any way, remove any copyright or other proprietary notices, or use any materials in a way that suggests an association with Our Temples.
              </p>

              <h2>4. User Contributions</h2>
              <p>
                Our Temples may allow users to submit, post, or share content such as reviews, comments, photos, or information about temples ("User Contributions"). By submitting User Contributions, you grant Our Temples a non-exclusive, worldwide, royalty-free, perpetual licence to use, reproduce, modify, publish, and distribute such content in connection with the operation of the website.
              </p>
              <p>
                You represent and warrant that:
              </p>
              <ul>
                <li>You own or control all rights to the User Contributions you post.</li>
                <li>Your User Contributions are accurate and not misleading.</li>
                <li>Your User Contributions do not violate these Terms of Service or the rights of any third party.</li>
                <li>Your User Contributions are respectful, factual, and relevant to temple information and spiritual heritage.</li>
              </ul>
              <p>
                Our Temples reserves the right to remove any User Contributions at our sole discretion, without notice, for any reason, including if we believe the content violates these Terms of Service.
              </p>

              <h2>5. Disclaimer</h2>
              <p>
                The materials on Our Temples are provided on an "as is" basis. Our Temples makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p>
                Furthermore, Our Temples does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this website. Temple information, visiting hours, and details may change without notice, and users are advised to verify information directly with the respective temples before visiting.
              </p>

              <h2>6. Limitation of Liability</h2>
              <p>
                In no event shall Our Temples or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Our Temples, even if Our Temples or an authorised representative has been notified orally or in writing of the possibility of such damage.
              </p>
              <p>
                Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you. In such cases, our liability shall be limited to the fullest extent permitted by applicable law.
              </p>

              <h2>7. Changes to Terms</h2>
              <p>
                Our Temples reserves the right to revise these Terms of Service at any time without notice. By using this website, you are agreeing to be bound by the current version of these Terms of Service. We encourage you to review these Terms periodically to stay informed about your rights and obligations.
              </p>
              <p>
                Your continued use of the website following the posting of any changes constitutes acceptance of those changes.
              </p>

              <h2>8. Contact Information</h2>
              <p>
                If you have any questions or concerns about these Terms of Service, please contact us at:
              </p>
              <ul>
                <li>Email: <a href="mailto:example@gmail.com">example@gmail.com</a></li>
                <li>Website: <a href="https://ourtemples.info">ourtemples.info</a></li>
              </ul>
              <p>
                We will make every effort to respond to your inquiry within a reasonable timeframe.
              </p>

            </div>
          </FadeIn>

        </div>
      </div>
    </main>
  );
}
