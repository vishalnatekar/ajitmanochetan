import type { Metadata } from 'next'
import Link from 'next/link'
import { readMarkdown } from '../../components/md'

const markdown = readMarkdown('content/pages/csr.md')

export const metadata: Metadata = {
  title: markdown.data.title ?? 'CSR / Partner with Us',
  description:
    'CSR partnership information, regulatory documents, and reporting framework for Ajita Manochetana.',
}

export default function CsrPage() {
  return (
    <article className="section space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">CSR Partnership</p>
        <h1 className="text-3xl font-semibold text-slate-900">{markdown.data.title}</h1>
        <p className="text-slate-600">
          Access due-diligence documents and learn how CSR partners collaborate with Ajita Manochetana.
        </p>
      </header>
      <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: markdown.html }} />
      <div className="card bg-white">
        <h2 className="text-lg font-semibold text-slate-900">Download CSR kit</h2>
        <p className="mt-2 text-sm text-slate-600">
          Upload PDFs to <code>/public/docs</code>. Link them here with filenames matching the uploaded documents.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-brand-700">
          <li>
            <Link href="/docs/registration-pan.pdf" target="_blank" rel="noopener" className="no-underline">
              Registration &amp; PAN (sample link)
            </Link>
          </li>
          <li>
            <Link href="/docs/financials-latest.pdf" target="_blank" rel="noopener" className="no-underline">
              Latest audited financials (sample link)
            </Link>
          </li>
        </ul>
      </div>
    </article>
  )
}
