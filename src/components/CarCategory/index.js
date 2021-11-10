import Image from 'next/image'
import { Text } from "../Text"

// Importing images
import suv from '../../../public/suv.svg'
import convertible from '../../../public/convertible.svg'
import coupe from '../../../public/coupe.svg'
import hatch from '../../../public/hatch.svg'
import sedan from '../../../public/sedan.svg'
import pickup from '../../../public/pickup.svg'

import Link from 'next/link'

import styles from './styles.module.scss'

export const CarCategory = ({ category }) => {
  return (
      // Instead of next.js' Link i'm using the normal 'a' tag, because of a not spected behavior
      <a href={`/categories/${category}`} className={`${styles.categoryContainer} flex column mainCenter crossCenter`}>
        {category == 'suv' && (
          <>
            <p className={`${styles.categoryName}`}>SUV</p>
            <Image src={suv} />
          </>
        )}
        {category == 'convertible' && (
          <>
            <p className={`${styles.categoryName}`}>Conversível</p>
            <Image src={convertible} />
          </>
        )}
        {category == 'coupe' && (
          <>
            <p className={`${styles.categoryName}`}>Coupé</p>
            <Image src={coupe} />
          </>
        )}
        {category == 'hatch' && (
          <>
            <p className={`${styles.categoryName}`}>Hatch</p>
            <Image src={hatch} />
          </>
        )}
        {category == 'sedan' && (
          <>
            <p className={`${styles.categoryName}`}>Sedan</p>
            <Image src={sedan} />
          </>
        )}
        {category == 'pickup' && (
          <>
            <p className={`${styles.categoryName}`}>Pickup</p>
            <Image src={pickup} />
          </>
        )}
      </a>
  )
}
