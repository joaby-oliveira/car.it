// Import Next.js components
import Image from 'next/image'

// Import components
import { Title } from '../../../../components/Title'

// Import styles
import styles from './styles.module.scss'

// Import images
import devicesDesktop from '../../../../../public/devicesDesktop.png'
import devicesMobile from '../../../../../public/devicesMobile.png'

export const Devices = () => {
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