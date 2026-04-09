import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Legal Documents — Wasaa Family',
  description: 'Privacy Policy and Terms of Service for the Wasaa Family platform.',
}

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{
        borderBottom: '1px solid var(--border)',
        background: 'rgba(13,17,9,0.95)',
        backdropFilter: 'blur(12px)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Image src="/logo.png" alt="Wasaa Family" width={130} height={40} style={{ objectFit: 'contain', objectPosition: 'left' }} />
          <nav style={{ display: 'flex', gap: 24, fontSize: 14 }}>
            <Link href="/privacy" style={{ color: 'var(--text-secondary)' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'var(--text-secondary)' }}>Terms of Service</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main style={{ flex: 1 }}>
        <section style={{ maxWidth: 960, margin: '0 auto', padding: '80px 24px 60px', textAlign: 'center' }}>
          {/* Gold ornament */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
            <div style={{ height: 1, width: 60, background: 'linear-gradient(to right, transparent, var(--gold))' }} />
            <span style={{ color: 'var(--gold)', fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Legal Documents</span>
            <div style={{ height: 1, width: 60, background: 'linear-gradient(to left, transparent, var(--gold))' }} />
          </div>

          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 700, lineHeight: 1.15, color: 'var(--text-primary)', marginBottom: 20 }}>
            Trust, Transparency &<br />
            <span style={{ color: 'var(--gold)' }}>Your Privacy</span>
          </h1>

          <p style={{ fontSize: 18, color: 'var(--text-secondary)', maxWidth: 540, margin: '0 auto 48px', lineHeight: 1.7 }}>
            Wasaa Family is built on trust. Read how we handle your data and the rules that govern our platform.
          </p>

          {/* Document cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 64 }}>
            <DocCard
              icon="🔒"
              title="Privacy Policy"
              description="How we collect, use, store, and protect your personal data across all Wasaa Family platforms."
              updated="9 April 2026"
              href="/privacy"
              cta="Read Privacy Policy"
            />
            <DocCard
              icon="📋"
              title="Terms of Service"
              description="Your rights, responsibilities, and the legal agreement governing your use of the Wasaa Family platform."
              updated="9 April 2026"
              href="/terms"
              cta="Read Terms of Service"
            />
          </div>

          {/* Quick facts */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: 40,
            textAlign: 'left',
          }}>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 22, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 28, textAlign: 'center' }}>
              Key Commitments
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
              <Fact label="Data Sold to Third Parties" value="Never" accent />
              <Fact label="Minimum Age" value="13 years old" />
              <Fact label="Password Storage" value="bcrypt — never plain text" accent />
              <Fact label="Infrastructure" value="AWS — encrypted" />
              <Fact label="Log Retention" value="90 days" accent />
              <Fact label="Governing Law" value="Republic of Kenya" />
              <Fact label="Privacy Contact" value="privacy@wasaafamilies.com" accent />
              <Fact label="Legal Contact" value="legal@wasaafamilies.com" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '32px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <Image src="/logo.png" alt="Wasaa Family" width={100} height={32} style={{ objectFit: 'contain', objectPosition: 'left', opacity: 0.7 }} />
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>© 2026 Wasaa Family. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20, fontSize: 13 }}>
            <Link href="/privacy" style={{ color: 'var(--text-muted)' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'var(--text-muted)' }}>Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function DocCard({ icon, title, description, updated, href, cta }: {
  icon: string; title: string; description: string; updated: string; href: string; cta: string
}) {
  return (
    <div className="doc-card" style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      textAlign: 'left',
      transition: 'border-color 0.2s',
    }}>
      <div style={{ fontSize: 36 }}>{icon}</div>
      <div>
        <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 20, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>{title}</h3>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{description}</p>
      </div>
      <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>Last updated: {updated}</p>
      <Link
        href={href}
        style={{
          marginTop: 'auto',
          display: 'inline-block',
          padding: '10px 20px',
          background: 'var(--gold-dim)',
          border: '1px solid var(--gold-border)',
          borderRadius: 8,
          color: 'var(--gold)',
          fontSize: 14,
          fontWeight: 500,
          textAlign: 'center',
          textDecoration: 'none',
        }}
      >
        {cta} →
      </Link>
    </div>
  )
}

function Fact({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>{label}</p>
      <p style={{ fontSize: 14, fontWeight: 500, color: accent ? 'var(--gold)' : 'var(--text-primary)' }}>{value}</p>
    </div>
  )
}
