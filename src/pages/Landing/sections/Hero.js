import Tag from '../components/Tag'
import styles from '../Landing.module.scss'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Tag>Novidade</Tag>
      <h1>Tenha acesso aos <span>melhores carros</span> semi-novos da sua região!</h1>
    </section >
  )
}

export default Hero
