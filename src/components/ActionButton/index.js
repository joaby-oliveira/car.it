import Link from 'next/link';

import Image from 'next/dist/client/image'

import styles from './styles.module.scss'
import fipeIlustration from '../../../public/fipeIlustration.svg'
import garageIlustration from '../../../public/garageIlustration.svg'

export const ActionButton = ({ fipe, garage }) => {
  return (
    <div className={`${styles.actionButtonContainer}`}>
      <div className={`${styles.actionButton} ${fipe ? styles.fipe : ''} ${garage ? styles.garage : ''} flex column crossCenter spaceBetween`}>
        <div className={`${styles.imageContainer} flex crossCenter`}>
          <Image src={fipe ? fipeIlustration : '' || garage ? garageIlustration : ''} />
        </div>
        <Link href='/fipe'>
          <a className={`${styles.cta} flex mainCenter crossCenter`}>
            {fipe && (
              <>
                FIPE
              </>
            )}
            {garage && (
              <>
                Garagem
              </>
            )}
          </a>
        </Link>
      </div>
      {fipe && (
        <p className={`${styles.description}`}>Procure a FIPE do carro que deseja</p>
      )}
      {garage && (
        <p className={`${styles.description}`}>Carros que você anunciou</p>
      )}
    </div>
  )
}
