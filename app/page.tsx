import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm } from './components/contact-form'

const mapEmbedUrl = process.env.NEXT_PUBLIC_MAP_EMBED_URL ?? ''
const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Ajit Manochetana'
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'ajitmanochetana94@gmail.com'
const contactPhone = process.env.NEXT_PUBLIC_PHONE ?? '+91 9448404434, +91 9481135153'
const contactPhones = contactPhone
  .split(/[|,/]/)
  .map((value) => value.trim())
  .filter(Boolean)
const contactAddress = process.env.NEXT_PUBLIC_ADDRESS_LINE ?? 'Subhas Nagar, Marathikoppa, Sirsi-581402'

const sanitizeTel = (value: string) => value.replace(/[^+\d]/g, '')

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Ajita Manochetana is a CSR-ready special education centre in Bengaluru providing individualised education, therapies, and inclusive programmes since 1997.',
}

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="bg-gradient-to-br from-brand-50 via-white to-slate-100">
        <div className="section grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700 ring-1 ring-brand-100">
              Sirsi · Uttara Kannada
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Community-rooted mental health, education, and rehabilitation support.
            </h1>
            <p className="text-lg text-slate-600">
              {siteName} Trust reaches rural and urban families with mental health services, day care, and individualised education through Vikas School for Special Children and allied programmes.
            </p>
            <div className="inline-flex items-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm">
              25 fruitful years of service in the fields of mental health &amp; education of special children
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="mailto:ajitmanochetana94@gmail.com" className="btn-primary">
                Write to the trust
              </Link>
              <Link
                href={mapEmbedUrl || 'https://maps.app.goo.gl'}
                className="inline-flex items-center justify-center rounded-full border border-brand-200 px-5 py-2 text-sm font-semibold text-brand-700 transition hover:border-brand-400 hover:bg-brand-50"
              >
                Plan a visit
              </Link>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              {[
                { label: 'Primary focus', value: 'Mental health & special education' },
                { label: 'Flagship initiative', value: 'Vikas School for Special Children' },
                { label: 'Recognition', value: 'State Award 2017 (Dept. Women & Child Development)' },
              ].map((item) => (
                <div key={item.label} className="card space-y-1 bg-white/80">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-brand-600">{item.label}</dt>
                  <dd className="text-base font-semibold text-slate-900">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="card h-full bg-white/90 space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Guided by service</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              The trust collaborates with healthcare professionals, educators, and community leaders to deliver compassionate care. Monthly psychiatric camps, Vyasanamukta Andolana awareness drives, and parent counselling ensure a full-circle approach to wellbeing.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              During the COVID-19 period, teachers and volunteers delivered food and medical kits door-to-door, highlighting the trust&apos;s commitment to every household it serves.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="section space-y-10">
          <header className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Community impact</p>
            <h2 className="text-3xl font-semibold text-slate-900">Mental health, education, and rehabilitation for rural and urban families</h2>
            <p className="text-slate-600">
              Ajita Manochetana Trust exists to extend mental health services through education, healthcare, and rehabilitation. What began as a project of Hindu Seva Pratisthana honouring Yoga expert late Sri Ajit Kumar has since grown into an independent trust recognised by the National Council for Mentally Challenged (Government of India) and honoured with the 2017 State Award from the Department of Women &amp; Child Development, Government of Karnataka.
            </p>
          </header>
          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="prose prose-slate max-w-none">
              <p>
                With a dedicated school building, learning infrastructure, a playground, and community hall facilities, the trust partners with Rotary, Lions, IMA, and a broad base of well-wishers to ensure inclusive support for children, caregivers, and the wider public.
              </p>
              <h3>Vikas School for Special Children</h3>
              <p>
                Vikas School offers day care and individualised education facilitated by trained teachers. The school started with nine students and now nurtures more than fifty-five children.
              </p>
              <ul>
                <li>Daily hot milk and mid-day meals to support nutrition.</li>
                <li>Transport assistance in partnership with Sirsi City Municipal Council and Divgi Torq Transfer Systems Pvt. Ltd., Pune.</li>
                <li>Life-skills, arts, and co-curricular exposure tailored to each learner.</li>
              </ul>
              <h3>Regular programmes &amp; outreach</h3>
              <ul>
                <li>
                  <strong>Monthly mental health camp:</strong> Free diagnostic and follow-up services every second Sunday since 2006, led by noted psychiatrist Dr. Shrinivas Kulkarni (Hubballi) and open to beneficiaries across Uttara Kannada.
                </li>
                <li>
                  <strong>Vyasanamukta Andolana:</strong> Awareness drives on the impact of substance abuse with guidance from Swarnavalli Maha Samasthana and experts from institutions such as NIMHANS, St. John&apos;s Medical College, and KMC.
                </li>
                <li>
                  <strong>Counselling &amp; Matramandali:</strong> Continuous counselling for caregivers, including parent collectives that exchange peer support and strategies.
                </li>
                <li>
                  <strong>Health camps:</strong> Targeted screenings and therapy support for people with physical and intellectual disabilities across the district.
                </li>
                <li>
                  <strong>COVID-19 response:</strong> Distribution of food and medicine kits with the Department of Health, Government of Karnataka, and home visits by teachers to ensure continuity of care.
                </li>
              </ul>
              <p>
                Teachers also conduct home visits to provide learning guidance and reinforce therapy plans, ensuring no family is left unsupported when travel is difficult.
              </p>
              <h3>An appeal for public support</h3>
              <ul>
                <li>Expand the late Sri Shivanna Bhuma building to serve more learners.</li>
                <li>Organise health camps, workshops, and information sessions on government schemes.</li>
                <li>Strengthen the monthly health camps with sustained medicine support.</li>
                <li>Equip the counselling centre and Matramandali (parents&apos; committee) with more resources.</li>
                <li>Construct the proposed school building on land granted by the Government of Karnataka.</li>
              </ul>
              <p>
                Contributions to Ajit Manochetana Trust qualify for relief under Section 80G of the Income Tax Act, 1961, and the trust is authorised to receive CSR assistance from corporate partners.
              </p>
            </div>
            <div className="space-y-6">
              <div className="card space-y-3">
                <h3 className="text-lg font-semibold text-slate-900">The trust &amp; advisors</h3>
                <p className="text-sm text-slate-600">
                  Guidance comes from spiritual leaders, medical experts, educators, and social sector champions who have shaped mental health services across Karnataka.
                </p>
                <ul className="grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                  {[
                    'Late Sri Vishwesha Tirtha Swamiji',
                    'Shri Gangadharendra Saraswati Swamiji',
                    'Dr. H. Sudarshan',
                    'Late Dr. Ashok Pai',
                    'Dr. Anand Pandurangi',
                    'Dr. B.N. Gangadhar',
                    'Dr. K.R. Shridhar',
                    'Late Dr. Upendra Shenoi',
                    'Shridhar Sagar',
                    'Dr. Vijayalakshmi Deshmane',
                    'Late Shri Prakash Kamat',
                    'Smt. Malathi Holla',
                    'Prof. M.K. Shridhar',
                    'Shatavadhani Dr. R. Ganesh',
                    'Shri Sitaram Kedilaya',
                  ].map((advisor) => (
                    <li key={advisor}>{advisor}</li>
                  ))}
                </ul>
              </div>
              <div className="card space-y-3">
                <h3 className="text-lg font-semibold text-slate-900">Governing council</h3>
                <dl className="space-y-3 text-sm text-slate-600">
                  <div>
                    <dt className="font-semibold text-slate-900">President</dt>
                    <dd>Sri Sudhir Bhat, Senior Tax Consultant</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Secretary</dt>
                    <dd>Sri Anant Hegde Ashisar, Environmentalist</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Trustee advisers</dt>
                    <dd>
                      Dr. G.M. Hegde · Sri V.R. Hegde Honnegadde · Prof. Ravi Naik · C.A. Uday Swadi · Sri Narayan Gadikai · Sri Vinayak Bhat · Dr. Keshav H. Korse
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Head teacher</dt>
                    <dd>Smt. Narmada Hegde</dd>
                  </div>
                </dl>
                <p className="text-xs text-slate-500">
                  The council commemorates achievements such as the 2017 International Day of Persons with Disabilities celebration and drives the trust&apos;s strategic growth.
                </p>
              </div>
              <div className="card space-y-3">
                <h3 className="text-lg font-semibold text-slate-900">Contact details</h3>
                <p className="text-sm text-slate-600">Ajit Manochetana Trust, Subhas Nagar, Marathikoppa, Sirsi – 581402</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>
                    <a href={`mailto:${contactEmail}`} className="text-brand-700">
                      {contactEmail}
                    </a>
                  </li>
                  {(contactPhones.length > 0 ? contactPhones : [contactPhone]).map((phone) => (
                    <li key={phone}>
                      <a href={`tel:${sanitizeTel(phone)}`} className="text-brand-700">
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </p>
              </div>
              <div className="card">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Phone</p>
                <ul className="mt-2 space-y-1">
                  {(contactPhones.length > 0 ? contactPhones : [contactPhone]).map((phone) => (
                    <li key={phone}>
                      <a href={`tel:${sanitizeTel(phone)}`}>{phone}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Address</p>
                <p className="mt-2 text-sm text-slate-600">{contactAddress}</p>
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
