import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Wasaa Family Terms of Service — your rights and responsibilities when using our platform.',
}

export default function TermsPage() {
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
          <Link href="/privacy" style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            Privacy Policy →
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px 80px' }}>
        {/* Title block */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>Legal</p>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(32px, 5vw, 44px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>
            Terms of Service
          </h1>
          <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            Effective date: 1 April 2026 &nbsp;·&nbsp; Last updated: 9 April 2026
          </p>
        </div>

        <Section title="1. Acceptance of Terms">
          <p>By creating an account, accessing, or using the Wasaa Family platform — including the mobile application, web application, and all related services (collectively, the "Service") — you agree to be bound by these Terms of Service and our <Link href="/privacy">Privacy Policy</Link>.</p>
          <p>If you do not agree to these Terms, you must not access or use the Service.</p>
        </Section>

        <Section title="2. Eligibility">
          <ul>
            <li>You must be at least <strong>13 years old</strong> to use the Service.</li>
            <li>Users between <strong>13 and 18</strong> must have consent from a parent or legal guardian.</li>
            <li>You must provide accurate, current, and complete information when registering.</li>
            <li>You may only create one personal account.</li>
          </ul>
        </Section>

        <Section title="3. Account Registration and Security">
          <ul>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>You are responsible for all activity that occurs under your account.</li>
            <li>Notify us immediately at <a href="mailto:support@wasaafamilies.com">support@wasaafamilies.com</a> if you suspect unauthorised access.</li>
            <li>We reserve the right to disable accounts that violate these Terms.</li>
          </ul>
        </Section>

        <Section title="4. The Service">
          <p>Wasaa Family is a private family networking platform that enables you to:</p>
          <ul>
            <li>Create and join private family groups.</li>
            <li>Share Moments (photos, videos, text).</li>
            <li>Communicate via real-time chat, audio and video calls.</li>
            <li>Manage family events, timelines, and budgets.</li>
            <li>Build and explore your family tree.</li>
            <li>Invite new members.</li>
          </ul>
          <p>We may modify, suspend, or discontinue any part of the Service at any time with reasonable notice.</p>
        </Section>

        <Section title="5. User Content">
          <p>You <strong>retain ownership</strong> of all content you create. By posting content, you grant Wasaa Family a non-exclusive, royalty-free, worldwide licence to host, store, display, and distribute your content solely within the platform for the purpose of operating the Service.</p>
          <h3>Content Standards — your content must not:</h3>
          <ul>
            <li>Violate any applicable law or infringe intellectual property rights.</li>
            <li>Contain pornographic, obscene, or sexually explicit material.</li>
            <li>Promote violence, hatred, or discrimination against any person or group.</li>
            <li>Contain malware or malicious code.</li>
            <li>Constitute harassment, bullying, or threats.</li>
            <li>Impersonate any person or misrepresent your identity.</li>
            <li>Constitute spam or unsolicited commercial messages.</li>
          </ul>
        </Section>

        <Section title="6. Prohibited Conduct">
          <p>You agree not to use the Service for any unlawful purpose; attempt to gain unauthorised access; use automated scripts or bots; interfere with the Service; reverse engineer any part; distribute spam or phishing; or collect personal data about other users without consent.</p>
        </Section>

        <Section title="7. Family Groups and Membership">
          <ul>
            <li>Joining a family requires an invitation from an existing member or a valid invite link/code.</li>
            <li>Family admins can manage membership, roles, and permissions.</li>
            <li>A user may be a member of multiple family groups.</li>
            <li>If you are removed from a family group, you will lose access to that group&apos;s content.</li>
          </ul>
        </Section>

        <Section title="8. Privacy">
          <p>Your use of the Service is subject to our <Link href="/privacy">Privacy Policy</Link>, which is incorporated into these Terms by reference.</p>
        </Section>

        <Section title="9. Disclaimers">
          <p>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. We do not warrant that the Service will be uninterrupted, error-free, or free of harmful components.</p>
        </Section>

        <Section title="10. Limitation of Liability">
          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WASAA FAMILY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES. OUR TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED USD 100 OR THE AMOUNT YOU PAID US IN THE PRIOR TWELVE MONTHS.</p>
        </Section>

        <Section title="11. Termination">
          <p>You may terminate your account at any time through the Settings screen. We may suspend or terminate your access at any time if we reasonably believe you have violated these Terms.</p>
        </Section>

        <Section title="12. Changes to These Terms">
          <p>We may update these Terms at any time. Material changes will be communicated via in-app notification or email. Continued use after changes constitutes acceptance.</p>
        </Section>

        <Section title="13. Governing Law">
          <p>These Terms are governed by the laws of the <strong>Republic of Kenya</strong>. Disputes shall be resolved in the courts of Nairobi, Kenya.</p>
        </Section>

        <Section title="14. Contact Us">
          <p><strong>Wasaa Family</strong></p>
          <p>Legal inquiries: <a href="mailto:legal@wasaafamilies.com">legal@wasaafamilies.com</a></p>
          <p>Support: <a href="mailto:support@wasaafamilies.com">support@wasaafamilies.com</a></p>
        </Section>
      </main>

      <footer style={{ borderTop: '1px solid var(--border)', padding: '28px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, fontSize: 13 }}>
          <span style={{ color: 'var(--text-muted)' }}>© 2026 Wasaa Family. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link href="/privacy" style={{ color: 'var(--text-muted)' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'var(--gold)', fontWeight: 500 }}>Terms of Service</Link>
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
