import Head from 'next/head'
import Landing from './Landing/Landing'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Car.it</title>
        <meta name="description" content="Anuncie e compre carros novos e usados na cidade de Marília" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </div>
  )
}
