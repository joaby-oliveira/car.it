// Import Next.js components
import Head from 'next/head'

// Import components
import Landing from './Landing'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Car.it</title>
        <meta name="description" content="Anuncie e compre carros novos e usados na cidade de Marília" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </div>
  )
}
