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

export default function PrivacyPolicyPage() {
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
              <h1 className="h1">Privacy Policy</h1>
            </FadeIn>
          </div>

          {/* ======== Body ======== */}
          <FadeIn delay={0.3} blur>
            <div className={styles.body}>

              <p>
                At Our Temples (ourtemples.info), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect on the website includes:
              </p>
              <ul>
                <li><strong>Personal Data:</strong> Voluntarily provided information such as your name and email address when you contact us or submit contributions.</li>
                <li><strong>Usage Data:</strong> Information automatically collected when you visit the website, including your IP address, browser type, operating system, referring URLs, pages viewed, and time spent on pages.</li>
                <li><strong>Device Data:</strong> Information about the device you use to access the website, including hardware model, operating system version, and unique device identifiers.</li>
                <li><strong>Location Data:</strong> General geographic location based on your IP address (country or city level), not precise GPS coordinates.</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customised experience. Specifically, we may use information collected about you to:
              </p>
              <ul>
                <li>Operate and maintain the website and its features.</li>
                <li>Respond to your comments, questions, and requests.</li>
                <li>Monitor and analyse usage and trends to improve the website experience.</li>
                <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                <li>Send you updates about new temples added to the directory, if you have opted in.</li>
                <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
              </ul>

              <h2>3. Cookies</h2>
              <p>
                We may use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
              </p>
              <p>
                We use the following types of cookies:
              </p>
              <ul>
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly. These cannot be switched off.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the website by collecting and reporting information anonymously.</li>
                <li><strong>Preference Cookies:</strong> Allow the website to remember choices you make (such as your preferred language or region).</li>
              </ul>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>

              <h2>4. Third-Party Services</h2>
              <p>
                We may share your information with third parties only in the ways described in this Privacy Policy. We may use third-party service providers to help us operate our website, including:
              </p>
              <ul>
                <li><strong>Analytics Providers:</strong> Services such as Google Analytics to help us understand website usage. These services may collect information sent by your browser as part of a web page request.</li>
                <li><strong>Hosting Providers:</strong> Infrastructure providers who host our website and store data on our behalf.</li>
                <li><strong>Email Services:</strong> Providers used to manage and send email communications, if you have subscribed.</li>
              </ul>
              <p>
                These third parties are authorised to use your personal information only as necessary to provide these services to us and are obligated to maintain the confidentiality of your information.
              </p>

              <h2>5. Data Security</h2>
              <p>
                We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
              <p>
                Any information disclosed online is vulnerable to interception and misuse by unauthorised parties. Therefore, we cannot guarantee complete security if you provide personal information.
              </p>

              <h2>6. Your Rights</h2>
              <p>
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul>
                <li><strong>Right of Access:</strong> You have the right to request copies of your personal data.</li>
                <li><strong>Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                <li><strong>Right to Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer the data we have collected to another organisation, or directly to you, under certain conditions.</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the information provided below.
              </p>

              <h2>7. Children&apos;s Privacy</h2>
              <p>
                Our Temples does not knowingly collect or solicit personally identifiable information from children under the age of 13. If you are under 13, please do not attempt to register on the website or send any personal information about yourself to us.
              </p>
              <p>
                If we learn that we have collected personal information from a child under age 13, we will delete that information as quickly as possible. If you believe that a child under 13 may have provided us personal information, please contact us.
              </p>

              <h2>8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the date at the top. You are advised to review this Privacy Policy periodically for any changes.
              </p>
              <p>
                Changes to this Privacy Policy are effective when they are posted on this page. Your continued use of the website after any changes signifies your acceptance of the updated Privacy Policy.
              </p>

              <h2>9. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <ul>
                <li>Email: <a href="mailto:example@gmail.com">example@gmail.com</a></li>
                <li>Website: <a href="https://ourtemples.info">ourtemples.info</a></li>
              </ul>

            </div>
          </FadeIn>

        </div>
      </div>
    </main>
  );
}
