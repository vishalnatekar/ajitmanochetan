import type { Metadata } from 'next'
import { readMarkdown } from '../../components/md'

const markdown = readMarkdown('content/pages/facilities.md')

export const metadata: Metadata = {
  title: markdown.data.title ?? 'Facilities',
  description: 'Facilities, therapy spaces, and accessibility provisions at Ajita Manochetana.',
}

export default function FacilitiesPage() {
  return (
    <article className="section space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Facilities</p>
        <h1 className="text-3xl font-semibold text-slate-900">{markdown.data.title}</h1>
      </header>
      <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: markdown.html }} />
    </article>
  )
}
