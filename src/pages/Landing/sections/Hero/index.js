// Import icons
import { ArrowRight } from 'react-feather'

// Import components
import { Tag } from '../../../../components/Tag'
import { Button } from '../../../../components/Button'
import { Title } from '../../../../components/Title'
import { Text } from '../../../../components/Text'

// Import styles 
import styles from './styles.module.scss'

export const Hero = () => {
  return (
    <section className={`${styles.hero} flex column crossStart maxWidth`}>
      <Tag>Novidade</Tag>
      <Title>Tenha acesso aos <span>melhores carros</span> semi-novos da sua região!</Title>
      <Text>Car.it é um novo jeito de obter um veículo próprio com o melhor custo e conforto, sempre se adequando com o seu gosto.</Text>
      <Button href="/home">
        Encontre o seu veículo agora!
        <ArrowRight className={styles.arrowIcon} strokeWidth={3} />
      </Button>
    </section>
  )
}