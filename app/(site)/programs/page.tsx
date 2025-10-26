import type { Metadata } from 'next'
import { readMarkdown } from '../../components/md'

const markdown = readMarkdown('content/pages/programs.md')

export const metadata: Metadata = {
  title: markdown.data.title ?? 'Programs & Therapies',
  description:
    'Overview of special education, therapy, life-skills, and inclusive culture programmes offered at Ajita Manochetana.',
}

export default function ProgramsPage() {
  return (
    <article className="section space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Programmes</p>
        <h1 className="text-3xl font-semibold text-slate-900">{markdown.data.title}</h1>
      </header>
      <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: markdown.html }} />
    </article>
  )
}
