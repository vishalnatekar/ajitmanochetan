import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import './styles/globals.css'

const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Ajita Manochetana'
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'ajitmanochetana94@gmail.com'
const contactPhone = process.env.NEXT_PUBLIC_PHONE ?? '+91 9448404434, +91 9481135153'
const contactAddress = process.env.NEXT_PUBLIC_ADDRESS_LINE ?? 'Subhas Nagar, Marathikoppa, Sirsi-581402'
const contactPhones = contactPhone
  .split(/[|,/]/)
  .map((value) => value.trim())
  .filter(Boolean)

const sanitizeTel = (value: string) => value.replace(/[^+\d]/g, '')

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
]

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    'Ajita Manochetana is a special school in Bengaluru offering individualized education, therapies, and inclusive programmes for children and young adults with special needs.',
  openGraph: {
    title: siteName,
    description:
      'Ajita Manochetana offers individualized special education, therapies, and life-skills programmes for children and young adults.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description:
      'Ajita Manochetana offers individualized special education, therapies, and life-skills programmes for children and young adults.',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow-sm">
            <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
              <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-brand-700 no-underline">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">AM</span>
                <span className="max-w-xs leading-tight">
                  <span className="block text-base font-bold">{siteName}</span>
                  <span className="text-xs font-normal text-slate-500">Special Education &amp; Therapy Centre</span>
                </span>
              </Link>
              <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-slate-700 no-underline hover:text-brand-600">
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="hidden text-right text-xs font-medium text-slate-600 md:block">
                <p>
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </p>
                {(contactPhones.length > 0 ? contactPhones : [contactPhone]).map((phone) => (
                  <p key={phone}>
                    <a href={`tel:${sanitizeTel(phone)}`}>{phone}</a>
                  </p>
                ))}
              </div>
            </div>
          </header>
          <main id="main-content">{children}</main>
          <footer>
            <div className="section grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <p className="text-lg font-semibold text-white">{siteName}</p>
                <p className="text-slate-200">
                  Dedicated to holistic development for children and young adults with diverse needs.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">Visit</p>
                <p className="mt-2 text-slate-200">{contactAddress}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">Contact</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                  </li>
                  {(contactPhones.length > 0 ? contactPhones : [contactPhone]).map((phone) => (
                    <li key={phone}>
                      <a href={`tel:${sanitizeTel(phone)}`}>{phone}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">Quick Links</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link href="/about" className="no-underline">
                      About the Trust
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery" className="no-underline">
                      Gallery
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-950 py-3 text-center text-xs text-slate-400">
              © {new Date().getFullYear()} {siteName}. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
