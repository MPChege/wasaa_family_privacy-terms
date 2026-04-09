import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Wasaa Family Privacy Policy — how we collect, use, and protect your data.',
}

const SECTIONS = [
  'Introduction', 'Information We Collect', 'How We Use Your Information',
  'How We Share Your Information', 'Data Storage and Security', 'Data Retention',
  'Your Rights and Choices', "Children's Privacy", 'Cookies',
  'International Data Transfers', 'Changes to This Policy', 'Contact Us',
]

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      <Header active="privacy" />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 32px 100px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 60, alignItems: 'start' }}>
        <Toc sections={SECTIONS} sibling={{ label: 'Terms of Service →', href: '/terms' }} />

        <main>
          <DocHeader
            title="Privacy Policy"
            badges={['12 sections', 'Governed by Kenyan law', 'We never sell your data']}
          />

          <S id="section-1" n="1" title="Introduction">
            <p>Welcome to Wasaa Family ("we", "our", or "us"). We operate the Wasaa Family mobile application, web platform, and related services (collectively, the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard information about you when you use the Service.</p>
            <p>By accessing or using the Service, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with its terms, please do not use the Service.</p>
          </S>

          <S id="section-2" n="2" title="Information We Collect">
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
          </S>

          <S id="section-3" n="3" title="How We Use Your Information">
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
          </S>

          <S id="section-4" n="4" title="How We Share Your Information">
            <p>We do <strong>not</strong> sell your personal data.</p>
            <h3>4.1 Within Your Family Groups</h3>
            <p>Content you post within a family is visible to other verified members of that family.</p>
            <h3>4.2 Service Providers</h3>
            <p>We work with trusted third-party providers under strict confidentiality obligations: Amazon Web Services (hosting/storage), Firebase (push notifications), and analytics providers.</p>
            <h3>4.3 Legal Requirements</h3>
            <p>We may disclose your information if required by law or in response to a valid legal request.</p>
            <h3>4.4 Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred. We will notify you before such a transfer.</p>
          </S>

          <S id="section-5" n="5" title="Data Storage and Security">
            <ul>
              <li>Data is stored on secure AWS servers with TLS/HTTPS encryption in transit.</li>
              <li>Passwords are hashed using <strong>bcrypt</strong> and never stored in plain text.</li>
              <li>Access to personal data is restricted to authorised personnel on a need-to-know basis.</li>
              <li>Regular security audits and vulnerability assessments are performed.</li>
            </ul>
          </S>

          <S id="section-6" n="6" title="Data Retention">
            <ul>
              <li><strong>Account data</strong> – retained until you delete your account.</li>
              <li><strong>Family content</strong> – visible until deleted by the poster or a family admin.</li>
              <li><strong>Log data</strong> – retained for up to 90 days.</li>
              <li><strong>Backup data</strong> – may be retained for up to 30 days after deletion.</li>
            </ul>
          </S>

          <S id="section-7" n="7" title="Your Rights and Choices">
            <p>Depending on your location, you may have the right to: access, correct, delete, or port your personal data; object to processing; restrict processing; or withdraw consent.</p>
            <p>To exercise these rights, contact <a href="mailto:privacy@wasaafamilies.com">privacy@wasaafamilies.com</a>.</p>
          </S>

          <S id="section-8" n="8" title="Children's Privacy">
            <p>The Service is not directed to children under the age of <strong>13</strong>. We do not knowingly collect personal information from children under 13. If you become aware of such data being collected, please contact us immediately.</p>
          </S>

          <S id="section-9" n="9" title="Cookies">
            <p>We use essential cookies (required for the Service to function), preference cookies (settings), and analytics cookies (anonymised). You can control cookies through your browser settings.</p>
          </S>

          <S id="section-10" n="10" title="International Data Transfers">
            <p>We are based in Kenya. Your data may be processed in other countries (including the United States via AWS) with appropriate safeguards in place.</p>
          </S>

          <S id="section-11" n="11" title="Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. Material changes will be communicated via in-app notification or email. Continued use of the Service after changes constitutes acceptance.</p>
          </S>

          <S id="section-12" n="12" title="Contact Us">
            <ContactBox>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 12 }}>Wasaa Family</p>
              <p style={{ marginBottom: 6 }}>Privacy inquiries: <a href="mailto:privacy@wasaafamilies.com">privacy@wasaafamilies.com</a></p>
              <p>Support: <a href="mailto:support@wasaafamilies.com">support@wasaafamilies.com</a></p>
              <p style={{ marginTop: 16, fontSize: 12, color: 'var(--text-muted)', borderTop: '1px solid var(--border)', paddingTop: 16 }}>
                This Privacy Policy is governed by the laws of the Republic of Kenya.
              </p>
            </ContactBox>
          </S>
        </main>
      </div>

      <Footer active="privacy" />
    </div>
  )
}

/* ── Shared components ─────────────────────────────── */

function Header({ active }: { active: 'privacy' | 'terms' }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid var(--border)', background: 'rgba(10,15,7,0.92)', backdropFilter: 'blur(16px)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/">
          <Image src="/logo-dark.png" alt="Wasaa Family" width={120} height={38} style={{ objectFit: 'contain', objectPosition: 'left' }} />
        </Link>
        <nav style={{ display: 'flex', gap: 28 }}>
          <Link href="/privacy" style={{ fontSize: 13, fontWeight: active === 'privacy' ? 600 : 400, color: active === 'privacy' ? 'var(--gold)' : 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/terms" style={{ fontSize: 13, fontWeight: active === 'terms' ? 600 : 400, color: active === 'terms' ? 'var(--gold)' : 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</Link>
        </nav>
      </div>
    </header>
  )
}

function Toc({ sections, sibling }: { sections: string[]; sibling: { label: string; href: string } }) {
  return (
    <aside style={{ position: 'sticky', top: 88 }}>
      <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 16, paddingLeft: 12 }}>Contents</p>
      <nav>
        {sections.map((s, i) => (
          <a key={s} href={`#section-${i + 1}`} className="legal-toc-link">{i + 1}. {s}</a>
        ))}
      </nav>
      <div style={{ marginTop: 28, paddingLeft: 12 }}>
        <Link href={sibling.href} style={{ fontSize: 12, color: 'var(--text-muted)', textDecoration: 'none' }}>{sibling.label}</Link>
      </div>
    </aside>
  )
}

function DocHeader({ title, badges }: { title: string; badges: string[] }) {
  return (
    <div style={{ marginBottom: 52, paddingBottom: 36, borderBottom: '1px solid var(--border)' }}>
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>Legal</p>
      <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(34px, 4vw, 50px)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: 16 }}>
        {title}
      </h1>
      <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 20 }}>
        Effective date: 1 April 2026 &nbsp;·&nbsp; Last updated: 9 April 2026
      </p>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {badges.map(b => (
          <span key={b} style={{ fontSize: 11, fontWeight: 500, color: 'var(--text-muted)', padding: '4px 12px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', borderRadius: 20 }}>{b}</span>
        ))}
      </div>
    </div>
  )
}

function S({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: 48, scrollMarginTop: 96 }}>
      <div className="legal-section-header">
        <span className="legal-section-num">{n}.</span>
        <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 20, fontWeight: 700, color: 'var(--text-primary)' }}>{title}</h2>
      </div>
      <div className="legal-body" style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
        {children}
      </div>
    </section>
  )
}

function ContactBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, padding: 28, marginTop: 8, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
      {children}
    </div>
  )
}

function Footer({ active }: { active: 'privacy' | 'terms' }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '28px 32px', background: 'rgba(0,0,0,0.2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, fontSize: 13 }}>
        <span style={{ color: 'var(--text-muted)' }}>© 2026 Wasaa Family. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <Link href="/privacy" style={{ color: active === 'privacy' ? 'var(--gold)' : 'var(--text-muted)', fontWeight: active === 'privacy' ? 500 : 400, textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/terms" style={{ color: active === 'terms' ? 'var(--gold)' : 'var(--text-muted)', fontWeight: active === 'terms' ? 500 : 400, textDecoration: 'none' }}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
