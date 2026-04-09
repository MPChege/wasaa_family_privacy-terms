import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Legal — Wasaa Family',
  description: 'Privacy Policy and Terms of Service for the Wasaa Family platform.',
}

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>

      {/* ── Header ── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        borderBottom: '1px solid var(--border)',
        background: 'rgba(10,15,7,0.92)',
        backdropFilter: 'blur(16px)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo-dark.png" alt="Wasaa Family" width={136} height={42} style={{ objectFit: 'contain', objectPosition: 'left' }} />
          </Link>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <Link href="/privacy" className="nav-link">Privacy Policy</Link>
            <Link href="/terms" className="nav-link">Terms of Service</Link>
          </nav>
        </div>
      </header>

      <main style={{ flex: 1 }}>

        {/* ── Hero ── */}
        <section style={{ position: 'relative', overflow: 'hidden', padding: '100px 32px 80px', textAlign: 'center' }}>
          <div className="hero-glow" />

          {/* Eyebrow */}
          <div className="divider-ornament" style={{ maxWidth: 400, margin: '0 auto 28px' }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', whiteSpace: 'nowrap' }}>
              Legal &amp; Privacy
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 700,
            lineHeight: 1.12,
            color: 'var(--text-primary)',
            marginBottom: 24,
            letterSpacing: '-0.01em',
          }}>
            Built on Trust.<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Transparent by design.</em>
          </h1>

          <p style={{ fontSize: 18, color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto 16px', lineHeight: 1.75 }}>
            Wasaa Family keeps your family's memories private and protected. Here's exactly how.
          </p>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 64 }}>
            Effective 1 April 2026 &nbsp;·&nbsp; Last updated 9 April 2026
          </p>

          {/* Document cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, maxWidth: 780, margin: '0 auto 80px', textAlign: 'left' }}>
            <DocCard
              icon="🔒"
              title="Privacy Policy"
              description="How we collect, use, store, and protect your personal data across all Wasaa Family platforms."
              points={['What data we collect', 'How we use your data', 'Your rights & choices']}
              href="/privacy"
            />
            <DocCard
              icon="📜"
              title="Terms of Service"
              description="Your rights, responsibilities, and the legal agreement governing your use of the Wasaa Family platform."
              points={['Eligibility & accounts', 'Content standards', 'Governing law (Kenya)']}
              href="/terms"
            />
          </div>
        </section>

        {/* ── Key commitments ── */}
        <section style={{ padding: '0 32px 100px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>

            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>Our commitments</p>
              <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 700, color: 'var(--text-primary)' }}>
                What we promise you
              </h2>
            </div>

            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 24,
              overflow: 'hidden',
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                <CommitmentCell icon="🚫" label="Data Sold" value="Never — not to anyone" accent />
                <CommitmentCell icon="🔐" label="Passwords" value="bcrypt hashed, never plain text" />
                <CommitmentCell icon="🛡️" label="Infrastructure" value="AWS — encrypted at rest & in transit" accent />
                <CommitmentCell icon="👤" label="Minimum Age" value="13 years old" />
                <CommitmentCell icon="📋" label="Log Retention" value="90 days maximum" accent />
                <CommitmentCell icon="⚖️" label="Governing Law" value="Republic of Kenya" />
                <CommitmentCell icon="✉️" label="Privacy" value="privacy@wasaafamilies.com" accent />
                <CommitmentCell icon="📨" label="Legal" value="legal@wasaafamilies.com" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact strip ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '56px 32px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>
            <div>
              <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 22, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>
                Questions about your data?
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>Our team is here to help. We respond within 48 hours.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a href="mailto:privacy@wasaafamilies.com" className="btn-gold">
                ✉ Privacy inquiries
              </a>
              <a href="mailto:legal@wasaafamilies.com" className="btn-gold">
                ⚖ Legal inquiries
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '32px', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <Image src="/logo-dark.png" alt="Wasaa Family" width={100} height={32} style={{ objectFit: 'contain', objectPosition: 'left', opacity: 0.55 }} />
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>© 2026 Wasaa Family · All rights reserved.</span>
          <div style={{ display: 'flex', gap: 24, fontSize: 13 }}>
            <Link href="/privacy" className="nav-link">Privacy Policy</Link>
            <Link href="/terms" className="nav-link">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ── DocCard ─────────────────────────────────────────── */
function DocCard({ icon, title, description, points, href }: {
  icon: string; title: string; description: string; points: string[]; href: string
}) {
  return (
    <div className="grad-card">
      <div className="grad-card-glow" />
      <div className="grad-card-inner">
        {/* Icon + badge */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{
            width: 52, height: 52, borderRadius: 14,
            background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))',
            border: '1px solid rgba(201,168,76,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 24,
          }}>
            {icon}
          </div>
          <span style={{
            fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--gold)', padding: '4px 10px',
            background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: 20,
          }}>
            Effective Apr 2026
          </span>
        </div>

        {/* Title + desc */}
        <div>
          <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 22, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10 }}>{title}</h3>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{description}</p>
        </div>

        {/* Bullet points */}
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {points.map(p => (
            <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--text-muted)' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
              {p}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href={href} className="btn-gold" style={{ marginTop: 'auto', justifyContent: 'center' }}>
          Read {title} →
        </Link>
      </div>
    </div>
  )
}

/* ── CommitmentCell ─────────────────────────────────── */
function CommitmentCell({ icon, label, value, accent }: { icon: string; label: string; value: string; accent?: boolean }) {
  return (
    <div style={{
      padding: '28px 28px',
      borderRight: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    }}>
      <div style={{ fontSize: 22 }}>{icon}</div>
      <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</p>
      <p style={{ fontSize: 14, fontWeight: 500, color: accent ? 'var(--gold)' : 'var(--text-primary)', lineHeight: 1.4 }}>{value}</p>
    </div>
  )
}
