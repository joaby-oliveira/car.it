import styles from './styles.module.scss'

import { Navbar } from "../../components/Navbar"
import { NoneItems } from "../../components/NoneItems"
import Head from 'next/head'

const Garage = () => {
  const cars = true;
  return (
    <main className="flex">
      <Head>
        <title>Car.it | Meus Carros</title>
        <meta name="description" content="Anuncie e compre carros novos e usados na cidade de Marília" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={`${styles.container} flex column`}>
        {cars && (
          <div>
            <NoneItems page='garage' />
          </div>
        )}
      </div>
    </main>

  )
}

export default Garage
