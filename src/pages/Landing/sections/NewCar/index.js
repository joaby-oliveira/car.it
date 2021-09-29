// Import Next.js components
import Image from 'next/image'

// Import styles
import styles from './styles.module.scss'

// Import SVGs
import newCarIlustration from '../../../../../public/newCarIlustration.svg'

// Import components
import { Title } from '../../../../components/Title'
import { Text } from '../../../../components/Text'

export const NewCar = () => {
  return (
    <section className={`${styles.newCar} flex mainCenter crossCenter`}>
      <div className="flex column mainCenter crossCenter">
        <header className={`flex column mainCenter crossCenter`}>
          <Title white={true}>Poupe e saia dirigindo com um carro novo</Title>
          <Text white={true}>
            Fique de carro novo e ainda poupe uma grana comprando através do nosso aplicativo. Temos um sistema de avaliação que pode classificar os melhores vendedores
          </Text>
        </header>
        <Image src={newCarIlustration} />
      </div>
    </section>
  )
}