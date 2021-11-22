// Import Next.js components
import Image from 'next/image'

import styles from './styles.module.scss'

// Import SVGs
import GarageIlustration from '../../../public/GarageIllustration.svg'

import { Title } from '../Title'
import { Button } from '../Button'

export const NoneItems = ({ page }) => {

  return (
    <div animationType="leftToRight" className={`${styles.container} flex column crossCenter`}>
      <Title center={true} medium={true}>Você ainda não {page === 'favorite' ? 'favoritou' : 'anunciou'}  nenhum carro</Title>
      <Image src={GarageIlustration} />
      { page === 'favorite' && (
        <Button href="/home">Ache o carro ideal</Button>
      ) }
      { page === 'garage' && (
        <Button href="/registerCar">Venda seu carro</Button>
      ) }
    </div>
  )
}