import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Wasaa Family Privacy Policy — how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Header */}
      <header style={{
        borderBottom: '1px solid var(--border)',
        background: 'rgba(13,17,9,0.95)',
        backdropFilter: 'blur(12px)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/">
            <Image src="/logo.png" alt="Wasaa Family" width={110} height={34} style={{ objectFit: 'contain', objectPosition: 'left' }} />
          </Link>
          <Link href="/terms" style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            Terms of Service →
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px 80px' }}>
        {/* Title block */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>Legal</p>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(32px, 5vw, 44px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            Effective date: 1 April 2026 &nbsp;·&nbsp; Last updated: 9 April 2026
          </p>
        </div>

        <Section title="1. Introduction">
          <p>Welcome to Wasaa Family ("we", "our", or "us"). We operate the Wasaa Family mobile application, web platform, and related services (collectively, the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard information about you when you use the Service.</p>
          <p>By accessing or using the Service, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with its terms, please do not use the Service.</p>
        </Section>

        <Section title="2. Information We Collect">
          <h3>2.1 Information You Provide Directly</h3>
          <ul>
            <li><strong>Account information</strong> – name, email address, phone number, date of birth, and password when you register.</li>
            <li><strong>Profile information</strong> – profile photo, bio, gender, and any other details you choose to add.</li>
            <li><strong>Family content</strong> – photos, videos, text posts (Moments), comments, events, budgets, and messages you create or share within a family.</li>
            <li><strong>Family relationships</strong> – names and relationships of family members you invite or connect with.</li>
            <li><strong>Communications</strong> – messages, calls, and video calls you send or receive through the Service.</li>
            <li><strong>Support requests</strong> – information you provide when contacting our support team.</li>
          </ul>
          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li><strong>Device information</strong> – device type, operating system, unique device identifiers, and mobile network.</li>
            <li><strong>Usage data</strong> – pages visited, features used, time spent, clicks, and interaction patterns.</li>
            <li><strong>Log data</strong> – IP address, browser type, access times, and referring URLs.</li>
            <li><strong>Location data</strong> – approximate location derived from IP address only.</li>
            <li><strong>Cookies</strong> – session tokens, preference cookies, and analytics identifiers.</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul>
            <li>Provide and operate the Service – create and manage your account, enable family connections.</li>
            <li>Personalise your experience – show relevant content and tailor notifications.</li>
            <li>Enable communication – facilitate real-time chat, audio calls, and video calls.</li>
            <li>Security and fraud prevention – detect and prevent unauthorised access or abuse.</li>
            <li>Analytics and improvement – understand how the Service is used to improve features.</li>
            <li>Customer support – respond to questions, troubleshoot issues.</li>
            <li>Legal compliance – comply with applicable laws and legal processes.</li>
            <li>Marketing – send product updates (you may opt out at any time).</li>
          </ul>
        </Section>

        <Section title="4. How We Share Your Information">
          <p>We do <strong>not</strong> sell your personal data.</p>
          <h3>4.1 Within Your Family Groups</h3>
          <p>Content you post within a family is visible to other verified members of that family.</p>
          <h3>4.2 Service Providers</h3>
          <p>We work with trusted third-party providers under strict confidentiality obligations: Amazon Web Services (hosting/storage), Firebase (push notifications), and analytics providers.</p>
          <h3>4.3 Legal Requirements</h3>
          <p>We may disclose your information if required by law or in response to a valid legal request.</p>
          <h3>4.4 Business Transfers</h3>
          <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred. We will notify you before such a transfer.</p>
        </Section>

        <Section title="5. Data Storage and Security">
          <ul>
            <li>Data is stored on secure AWS servers with TLS/HTTPS encryption in transit.</li>
            <li>Passwords are hashed using <strong>bcrypt</strong> and never stored in plain text.</li>
            <li>Access to personal data is restricted to authorised personnel on a need-to-know basis.</li>
            <li>Regular security audits and vulnerability assessments are performed.</li>
          </ul>
        </Section>

        <Section title="6. Data Retention">
          <ul>
            <li><strong>Account data</strong> – retained until you delete your account.</li>
            <li><strong>Family content</strong> – visible until deleted by the poster or a family admin.</li>
            <li><strong>Log data</strong> – retained for up to 90 days.</li>
            <li><strong>Backup data</strong> – may be retained for up to 30 days after deletion.</li>
          </ul>
        </Section>

        <Section title="7. Your Rights and Choices">
          <p>Depending on your location, you may have the right to: access, correct, delete, or port your personal data; object to processing; restrict processing; or withdraw consent.</p>
          <p>To exercise these rights, contact <a href="mailto:privacy@wasaafamilies.com">privacy@wasaafamilies.com</a>.</p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>The Service is not directed to children under the age of <strong>13</strong>. We do not knowingly collect personal information from children under 13. If you become aware of such data being collected, please contact us immediately.</p>
        </Section>

        <Section title="9. Cookies">
          <p>We use essential cookies (required for the Service to function), preference cookies (settings), and analytics cookies (anonymised). You can control cookies through your browser settings.</p>
        </Section>

        <Section title="10. International Data Transfers">
          <p>We are based in Kenya. Your data may be processed in other countries (including the United States via AWS) with appropriate safeguards in place.</p>
        </Section>

        <Section title="11. Changes to This Policy">
          <p>We may update this Privacy Policy from time to time. Material changes will be communicated via in-app notification or email. Continued use of the Service after changes constitutes acceptance.</p>
        </Section>

        <Section title="12. Contact Us">
          <p><strong>Wasaa Family</strong></p>
          <p>Privacy inquiries: <a href="mailto:privacy@wasaafamilies.com">privacy@wasaafamilies.com</a></p>
          <p>Support: <a href="mailto:support@wasaafamilies.com">support@wasaafamilies.com</a></p>
          <p style={{ marginTop: 12, fontSize: 13, color: 'var(--text-muted)' }}>This Privacy Policy is governed by the laws of Kenya.</p>
        </Section>
      </main>

      <footer style={{ borderTop: '1px solid var(--border)', padding: '28px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, fontSize: 13 }}>
          <span style={{ color: 'var(--text-muted)' }}>© 2026 Wasaa Family. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link href="/privacy" style={{ color: 'var(--gold)', fontWeight: 500 }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'var(--text-muted)' }}>Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 44 }}>
      <h2 style={{
        fontFamily: 'Playfair Display, Georgia, serif',
        fontSize: 20,
        fontWeight: 700,
        color: 'var(--text-primary)',
        paddingBottom: 12,
        marginBottom: 20,
        borderBottom: '1px solid var(--border)',
      }}>
        {title}
      </h2>
      <div style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75 }}
        className="legal-body">
        {children}
      </div>
    </section>
  )
}
