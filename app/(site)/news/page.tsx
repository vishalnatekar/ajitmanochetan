import type { Metadata } from 'next'
import Link from 'next/link'
import { readCollection } from '../../components/md'

const newsItems = readCollection('content/news')

export const metadata: Metadata = {
  title: 'News',
  description:
    'Articles and updates from Ajit Manochetana Trust, including therapy camps, celebrations, and community outreach.',
}

export default function NewsPage() {
  return (
    <section className="section space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">News</p>
        <h1 className="text-3xl font-semibold text-slate-900">Stories from our community</h1>
        <p className="text-slate-600">
          Explore updates from therapy camps, Vikas School milestones, and partner engagements supporting inclusive education.
        </p>
      </header>
      {newsItems.length === 0 ? (
        <p className="text-slate-600">News articles will appear here once published from the site admin.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {newsItems.map((item) => (
            <article key={item.slug} className="card h-full bg-white">
              <header className="space-y-2">
                <p className="text-xs uppercase tracking-wide text-brand-600">
                  {item.data.date
                    ? new Date(item.data.date as string).toLocaleDateString('en-IN', { dateStyle: 'medium' })
                    : 'Update'}
                </p>
                <h2 className="text-xl font-semibold text-slate-900">{item.data.title as string}</h2>
              </header>
              {item.data.cover ? (
                <img
                  src={item.data.cover as string}
                  alt={`Cover image for ${item.data.title}`}
                  loading="lazy"
                  className="mt-4 h-48 w-full rounded-xl object-cover"
                />
              ) : null}
              <p className="mt-3 text-sm text-slate-600">
                {(item.data.summary as string) ?? 'Read the latest story from Ajit Manochetana Trust.'}
              </p>
              <Link href={`/news/${item.slug}`} className="mt-4 inline-flex text-sm font-semibold text-brand-700">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
