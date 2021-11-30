import styles from './styles.module.scss'

import { Navbar } from "../../components/Navbar"
import { CarPreview } from "../../components/CarPreview"
import { NoneItems } from "../../components/NoneItems"
import Head from 'next/head'
import { useEffect, useState } from 'react'

const Garage = () => {
  const cars = true;
  const [carData, setCarData] = useState(null);

  useEffect(async () => {
    const result = await fetch('http://localhost:8080/user/1/vehicles')
    const { data } = await result.json()
    setCarData(data)
  }, [])

  return (
    <main className="flex">
      <Head>
        <title>Car.it | Meus Carros</title>
        <meta name="description" content="Anuncie e compre carros novos e usados na cidade de Marília" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={`${styles.container} flex column`}>
        {
        cars && (
          <div>
            <NoneItems page='garage' />
          </div>
        )}
        {
          carData && carData.forEach(car => {
            <CarPreview />
          }) 
        }
       
      </div>
    </main>

  )
}

export default Garage
