import Head from 'next/head'
import Script from 'next/script'

import { Examples, MoreExamples } from '@/components/Examples'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Script src="https://cdn.usefathom.com/script.js" data-site="GCGAUKHE" />
      <Head>
        <title>
          Speed Up My App - The easiest way to make your applications faster.
        </title>
        <meta
          name="description"
          content="Make your applications faster."
        />
        <link rel="canonical" href="https://speedupmy.app" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Examples />
        <MoreExamples />
        <Testimonials />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
