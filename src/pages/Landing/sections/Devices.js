import Image from 'next/image'
import { Title } from '../../../components/Title'
import styles from '../Landing.module.scss'
import devicesDesktop from '../../../../public/devicesDesktop.png'
import devicesMobile from '../../../../public/devicesMobile.png'

const Devices = () => {
  return (
    <section className={`${styles.devices} flex column crossCenter`}>
      <Title className={styles.title} white={true} center={true}>Encontre as <span>melhores opções</span> de automóveis em qualquer dispositivo</Title>
      <div className={styles.devicesImages}>
        <Image
          className={styles.device}
          
          src={devicesMobile} alt="Página de carro do Car.it em um smartphone"
        />
        <Image
          className={styles.device}
          src={devicesDesktop} alt="Página de carro do Car.it em um notebook"
        />
      </div>
    </section>
  )
}

export default Devices
