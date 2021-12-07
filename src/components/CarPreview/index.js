import Image from 'next/image'

import { FiHeart } from 'react-icons/fi'

import car from '../../../public/car.jpg'
import { Button } from '../Button'
import { Text } from '../Text'
import { Title } from '../Title'

import styles from './styles.module.scss'

export const CarPreview = () => {
  return (
    <div className={`${styles.carPreview} flex column crossCenter`}>
      <div className={`${styles.carImageContainer}`}>
        <Image className={`${styles.carImage}`} src={car} />
      </div>
      <div className={`${styles.carDetails} flex column`}>
        <Title small={true} className={`${styles.carName}`}>Chevrolet Onix</Title>
        <div className={`${styles.description} flex column`}>
          <Text>1.0 Flex LT Manual</Text>
          <Text>2014/2014</Text>
          <small className={`${styles.seller}`}>Jorge de Souza</small>
          <FiHeart size={30} className={`${styles.favorite}`} />
        </div>
        <h2 className={`${styles.price}`}>R$ 35.500</h2>
        <div className={styles.more}>
          <Button href="/car/1" fillParent={true}>Ver carro</Button>
        </div>
      </div>
    </div>
  )
}
