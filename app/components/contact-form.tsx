'use client'

import { FormEvent, useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? ''

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formspreeEndpoint) {
      setStatus('error')
      return
    }

    const form = event.currentTarget
    const data = new FormData(form)

    setStatus('loading')

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })

      if (response.ok) {
        form.reset()
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Form submission failed', error)
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      action={formspreeEndpoint}
      method="post"
      className="card space-y-4"
      aria-label="Contact form"
    >
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} required />
      </div>
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
      <p className="text-sm" role="status" aria-live="polite">
        {status === 'success' && 'Thank you! We will get back to you shortly.'}
        {status === 'error' && 'There was a problem sending your message. Please try again later or email us directly.'}
      </p>
    </form>
  )
}
