import Image from 'next/image'
import { Title } from '../../../components/Title'
import styles from '../Landing.module.scss'
import newCarIlustration from '../../../../public/newCarIlustration.svg'
import { Text } from '../../../components/Text'

const NewCar = () => {
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

export default NewCar
