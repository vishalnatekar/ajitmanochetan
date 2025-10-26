import type { Metadata } from 'next'
import Link from 'next/link'
import { readCollection } from '../../components/md'

const news = readCollection('content/news')

export const metadata: Metadata = {
  title: 'News & Updates',
  description: 'Stories, highlights, and announcements from Ajita Manochetana.',
}

export default function NewsPage() {
  return (
    <section className="section space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">News &amp; Stories</p>
        <h1 className="text-3xl font-semibold text-slate-900">Campus updates and community highlights</h1>
        <p className="text-slate-600">
          Browse celebrations, therapy milestones, donor spotlights, and inclusive events powered by the Ajita
          Manochetana community.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {news.length === 0 ? (
          <p className="text-slate-600">No news posts yet. Check back soon!</p>
        ) : (
          news.map((item) => (
            <article key={item.slug} className="card h-full bg-white">
              <p className="text-xs uppercase tracking-wide text-brand-600">
                {item.data.date ? new Date(item.data.date).toLocaleDateString('en-IN', { dateStyle: 'medium' }) : 'Upcoming'}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-900">{item.data.title}</h2>
              {item.data.cover ? (
                <img
                  src={item.data.cover as string}
                  alt={`Cover for ${item.data.title}`}
                  loading="lazy"
                  className="mt-4 h-48 w-full rounded-xl object-cover"
                />
              ) : null}
              <p className="mt-4 text-sm text-slate-600">
                {item.data.summary ?? 'Read the full story from our latest programme.'}
              </p>
              <Link href={`/news/${item.slug}`} className="mt-6 inline-flex text-sm font-semibold text-brand-700">
                Read more →
              </Link>
            </article>
          ))
        )}
      </div>
    </section>
  )
}
