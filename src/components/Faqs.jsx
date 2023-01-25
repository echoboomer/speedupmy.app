import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What if I get caught?',
      answer:
        'You won\'t. Nine times out of then, the only comment you will receive is `LGTM 👍🚢`.',
    },
  ],
  [
    {
      question: 'I\'m not sure this is for me. I believe in strict code review and this is clearly nonsense.',
      answer:
        'Depending on how much you love your job or the organization you work for, this is still a practice even advanced users can adopt.',
    },
  ],
  [
    {
      question: 'What if I want to brag about this on social media? Do you have a template?',
      answer:
        "Just remembered that one time at my <insert job number> job that I left a sleep function in my code. I <lowered/removed/enhanced> it every time I <got yelled at/got pushback/was in an incident/needed praise>. 🥰",
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            FAQ
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            What&apos;s the catch? There is no catch. Look anywhere - Reddit, Google, StackOverflow,
            literally anywhere, and you&apos;ll find success stories referencing this practice in action.
            Here are some of the questions we receive most frequently.
          </p>
        </div>
        <div itemScope itemType="https://schema.org/FAQPage">
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
          >
            {faqs.map((column, columnIndex) => (
              <li key={columnIndex}>
                <ul role="list" className="flex flex-col gap-y-8">
                  {column.map((faq, faqIndex) => (
                    <li key={faqIndex}>
                      <div
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                      >
                        <h3
                          className="font-display text-lg leading-7 text-slate-900"
                          itemProp="name"
                        >
                          {faq.question}
                        </h3>
                        <div
                          itemScope
                          itemProp="acceptedAnswer"
                          itemType="https://schema.org/Answer"
                        >
                          <div itemProp="text">
                            <p className="mt-4 text-sm text-slate-700">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
