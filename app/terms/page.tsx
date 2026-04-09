import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Wasaa Family Terms of Service — your rights and responsibilities when using our platform.',
}

const SECTIONS = [
  'Acceptance of Terms', 'Eligibility', 'Account Registration and Security',
  'The Service', 'User Content', 'Prohibited Conduct',
  'Family Groups and Membership', 'Privacy', 'Disclaimers',
  'Limitation of Liability', 'Termination', 'Changes to These Terms',
  'Governing Law', 'Contact Us',
]

export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      <Header active="terms" />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 32px 100px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 60, alignItems: 'start' }}>
        <Toc sections={SECTIONS} sibling={{ label: 'Privacy Policy →', href: '/privacy' }} />

        <main>
          <DocHeader
            title="Terms of Service"
            badges={['14 sections', 'Governed by Kenyan law', 'You own your content']}
          />

          <S id="section-1" n="1" title="Acceptance of Terms">
            <p>By creating an account, accessing, or using the Wasaa Family platform — including the mobile application, web application, and all related services (collectively, the "Service") — you agree to be bound by these Terms of Service and our <Link href="/privacy">Privacy Policy</Link>.</p>
            <p>If you do not agree to these Terms, you must not access or use the Service.</p>
          </S>

          <S id="section-2" n="2" title="Eligibility">
            <ul>
              <li>You must be at least <strong>13 years old</strong> to use the Service.</li>
              <li>Users between <strong>13 and 18</strong> must have consent from a parent or legal guardian.</li>
              <li>You must provide accurate, current, and complete information when registering.</li>
              <li>You may only create one personal account.</li>
            </ul>
          </S>

          <S id="section-3" n="3" title="Account Registration and Security">
            <ul>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You are responsible for all activity that occurs under your account.</li>
              <li>Notify us immediately at <a href="mailto:support@wasaafamilies.com">support@wasaafamilies.com</a> if you suspect unauthorised access.</li>
              <li>We reserve the right to disable accounts that violate these Terms.</li>
            </ul>
          </S>

          <S id="section-4" n="4" title="The Service">
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
          </S>

          <S id="section-5" n="5" title="User Content">
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
          </S>

          <S id="section-6" n="6" title="Prohibited Conduct">
            <p>You agree not to use the Service for any unlawful purpose; attempt to gain unauthorised access; use automated scripts or bots; interfere with the Service; reverse engineer any part; distribute spam or phishing; or collect personal data about other users without consent.</p>
          </S>

          <S id="section-7" n="7" title="Family Groups and Membership">
            <ul>
              <li>Joining a family requires an invitation from an existing member or a valid invite link/code.</li>
              <li>Family admins can manage membership, roles, and permissions.</li>
              <li>A user may be a member of multiple family groups.</li>
              <li>If you are removed from a family group, you will lose access to that group&apos;s content.</li>
            </ul>
          </S>

          <S id="section-8" n="8" title="Privacy">
            <p>Your use of the Service is subject to our <Link href="/privacy">Privacy Policy</Link>, which is incorporated into these Terms by reference.</p>
          </S>

          <S id="section-9" n="9" title="Disclaimers">
            <p>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. We do not warrant that the Service will be uninterrupted, error-free, or free of harmful components.</p>
          </S>

          <S id="section-10" n="10" title="Limitation of Liability">
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WASAA FAMILY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES. OUR TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED USD 100 OR THE AMOUNT YOU PAID US IN THE PRIOR TWELVE MONTHS.</p>
          </S>

          <S id="section-11" n="11" title="Termination">
            <p>You may terminate your account at any time through the Settings screen. We may suspend or terminate your access at any time if we reasonably believe you have violated these Terms.</p>
          </S>

          <S id="section-12" n="12" title="Changes to These Terms">
            <p>We may update these Terms at any time. Material changes will be communicated via in-app notification or email. Continued use after changes constitutes acceptance.</p>
          </S>

          <S id="section-13" n="13" title="Governing Law">
            <p>These Terms are governed by the laws of the <strong>Republic of Kenya</strong>. Disputes shall be resolved in the courts of Nairobi, Kenya.</p>
          </S>

          <S id="section-14" n="14" title="Contact Us">
            <ContactBox>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 12 }}>Wasaa Family</p>
              <p style={{ marginBottom: 6 }}>Legal inquiries: <a href="mailto:legal@wasaafamilies.com">legal@wasaafamilies.com</a></p>
              <p>Support: <a href="mailto:support@wasaafamilies.com">support@wasaafamilies.com</a></p>
            </ContactBox>
          </S>
        </main>
      </div>

      <Footer active="terms" />
    </div>
  )
}

/* ── Shared components ─────────────────────────────── */

function Header({ active }: { active: 'privacy' | 'terms' }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid var(--border)', background: 'rgba(10,15,7,0.92)', backdropFilter: 'blur(16px)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/">
          <Image src="/logo.png" alt="Wasaa Family" width={120} height={38} style={{ objectFit: 'contain', objectPosition: 'left' }} />
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
