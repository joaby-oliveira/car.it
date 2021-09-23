import Tag from '../components/Tag'
import Button from '../../../components/Button'
import styles from '../Landing.module.scss'
import { ArrowRight } from 'react-feather'
import { Title } from '../../../components/Title'
import { Text } from '../../../components/Text'

const Hero = () => {
  return (
    <section className={`${styles.hero} flex column crossStart`}>
      <Tag>Novidade</Tag>
      <Title>Tenha acesso aos <span>melhores carros</span> semi-novos da sua região!</Title>
      <Text>Car.it é um novo jeito de obter um veículo próprio com o melhor custo e conforto, sempre se adequando com o seu gosto.</Text>
      <Button href="/app">
        Encontre o seu veículo agora!
        <ArrowRight strokeWidth={3} />
      </Button>
    </section>
  )
}

export default Hero
