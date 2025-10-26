import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm } from './components/contact-form'
import { readCollection } from './components/md'

const mapEmbedUrl = process.env.NEXT_PUBLIC_MAP_EMBED_URL ?? ''
const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Ajita Manochetana'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Ajita Manochetana is a CSR-ready special education centre in Bengaluru providing individualised education, therapies, and inclusive programmes since 1997.',
}

export default function HomePage() {
  const news = readCollection('content/news').slice(0, 3)

  return (
    <div className="flex flex-col gap-16">
      <section className="bg-gradient-to-br from-brand-50 via-white to-slate-100">
        <div className="section grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700 ring-1 ring-brand-100">
              Since 1997 · Bengaluru
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Special education, therapies, and life-skills for every learner to thrive.
            </h1>
            <p className="text-lg text-slate-600">
              {siteName} partners with families, donors, and corporates to provide inclusive education, therapy, and community programmes for children and young adults with diverse needs.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/admissions" className="btn-primary">
                Explore admissions
              </Link>
              <Link
                href="/csr"
                className="inline-flex items-center justify-center rounded-full border border-brand-200 px-5 py-2 text-sm font-semibold text-brand-700 transition hover:border-brand-400 hover:bg-brand-50"
              >
                CSR partnership
              </Link>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              {[
                { label: 'Learners supported', value: '46+' },
                { label: 'Core programmes', value: 'Education · Therapies · Life-skills' },
                { label: 'Annual flagship events', value: 'Independence Day · Teachers\' Day · Exhibitions' },
              ].map((item) => (
                <div key={item.label} className="card space-y-1 bg-white/80">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-brand-600">{item.label}</dt>
                  <dd className="text-base font-semibold text-slate-900">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="card h-full bg-white/90">
            <h2 className="text-xl font-semibold text-slate-900">What we do</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
              <li>
                Individualised Education Plans (IEPs) with small group instruction and family involvement.
              </li>
              <li>Integrated therapies: speech, occupational, physiotherapy, sensory integration.</li>
              <li>Life-skills, vocational training, and community readiness programmes.</li>
              <li>Inclusive cultural events, health camps, volunteer and donor engagement.</li>
            </ul>
            <div className="mt-6">
              <Link href="/programs" className="btn-primary">
                View programmes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">Why corporates trust us for CSR</h2>
            <p className="text-lg text-slate-600">
              Transparent reporting, community-rooted work, and measurable outcomes make {siteName} a reliable CSR partner. We align with SDGs 3, 4, 8, and 10, delivering quarterly impact updates.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: 'Regulatory-ready',
                  body: '12A, 80G, CSR-1, and statutory filings available in the CSR kit.',
                },
                {
                  title: 'Impact dashboards',
                  body: 'Beneficiary progress, session logs, case studies, and utilisation reports.',
                },
                {
                  title: 'Volunteer friendly',
                  body: 'Employee engagement days, skill-based volunteering, mentorship.',
                },
                {
                  title: 'Community reach',
                  body: 'Support for families through counselling, health camps, and awareness drives.',
                },
              ].map((item) => (
                <li key={item.title} className="card">
                  <p className="text-base font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.body}</p>
                </li>
              ))}
            </ul>
            <Link href="/csr" className="btn-primary">
              Download CSR kit
            </Link>
          </div>
          <div className="card space-y-4 bg-white">
            <h3 className="text-xl font-semibold text-slate-900">Admissions snapshot</h3>
            <ol className="space-y-3 text-sm text-slate-600">
              <li>
                <span className="font-semibold text-brand-700">1.</span> Enquiry and visit to understand learner needs.
              </li>
              <li>
                <span className="font-semibold text-brand-700">2.</span> Assessment, IEP discussion, and family counselling.
              </li>
              <li>
                <span className="font-semibold text-brand-700">3.</span> Documentation and onboarding support with regular reviews.
              </li>
            </ol>
            <Link href="/admissions" className="inline-flex items-center text-sm font-semibold text-brand-700">
              Learn more about admissions →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-slate-100">
        <div className="section">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">Latest news &amp; stories</h2>
              <p className="text-slate-300">
                Highlights from events, therapies, and community outreach.
              </p>
            </div>
            <Link href="/news" className="btn-primary bg-white text-slate-900 hover:bg-slate-200">
              View all news
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {news.length === 0 ? (
              <p className="text-slate-300">News updates coming soon.</p>
            ) : (
              news.map((item) => (
                <article key={item.slug} className="card h-full bg-slate-800/60 text-slate-100">
                  <header className="space-y-1">
                    <p className="text-xs uppercase tracking-wide text-brand-200">
                      {item.data.date ? new Date(item.data.date).toLocaleDateString('en-IN', { dateStyle: 'medium' }) : 'Upcoming'}
                    </p>
                    <h3 className="text-lg font-semibold text-white">{item.data.title}</h3>
                  </header>
                  <p className="mt-3 text-sm text-slate-300">
                    {item.data.summary ?? 'Read the reflections from our latest programmes and celebrations.'}
                  </p>
                  <Link href={`/news/${item.slug}`} className="mt-4 inline-flex text-sm font-semibold text-brand-200">
                    Read more →
                  </Link>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="section grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">Connect with us</h2>
            <p className="text-lg text-slate-600">
              Schedule a school visit, plan a CSR engagement, or volunteer. We respond within two working days.
            </p>
            <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
              <div className="card">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Email</p>
                <p className="mt-2">
                  <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'info@ajitamanochetana.org'}`}>
                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'info@ajitamanochetana.org'}
                  </a>
                </p>
              </div>
              <div className="card">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Phone</p>
                <p className="mt-2">
                  <a href={`tel:${(process.env.NEXT_PUBLIC_PHONE ?? '+91 9000000000').replace(/\s+/g, '')}`}>
                    {process.env.NEXT_PUBLIC_PHONE ?? '+91 9000000000'}
                  </a>
                </p>
              </div>
              <div className="card sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Address</p>
                <p className="mt-2 text-sm text-slate-600">
                  {process.env.NEXT_PUBLIC_ADDRESS_LINE ?? 'Bengaluru, Karnataka'}
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <ContactForm />
            {mapEmbedUrl ? (
              <iframe
                title="Location map"
                src={mapEmbedUrl}
                loading="lazy"
                className="h-64 w-full rounded-2xl border-0 shadow-sm"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : null}
          </div>
        </div>
      </section>
    </div>
  )
}
