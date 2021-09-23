import { Title } from '../../../components/Title'
import styles from '../Landing.module.scss'

const Devices = () => {
  return (
    <section className={`${styles.devices} flex mainCenter`}>
      <Title className={styles.title} white={true} center={true}>Encontre as <span>melhores opções</span> de automóveis em qualquer dispositivo</Title>
    </section>
  )
}

export default Devices
