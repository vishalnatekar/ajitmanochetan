import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News',
  description: 'Updates and articles will appear here soon.',
}

export default function NewsPage() {
  return (
    <section className="section space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">News</p>
        <h1 className="text-3xl font-semibold text-slate-900">News &amp; articles coming soon</h1>
      </header>
      <p className="text-slate-600">
        Stories from Ajit Manochetana Trust will be published here once the editorial team adds the latest updates.
      </p>
    </section>
  )
}
