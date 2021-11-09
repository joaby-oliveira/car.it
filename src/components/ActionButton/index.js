import Image from 'next/dist/client/image'

import styles from './styles.module.scss'
import fipeIlustration from '../../../public/fipeIlustration.svg'

export const ActionButton = (fipe) => {
  console.log(fipe)
  return (
    <div className={`${styles.actionButton} ${fipe ? styles.fipe : ''} flex column crossCenter spaceBetween`}>
      <div className={`${styles.imageContainer} flex crossCenter`}>
        <Image src={fipeIlustration} />
      </div>
      <button className={`${styles.cta}`}>
        FIPE
      </button>
    </div>
  )
}
