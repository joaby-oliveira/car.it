import Image from 'next/image'

import styles from './styles.module.scss'
import rodriguesLogo from '../../../public/rodriguesLogo.jpg'
import stars from '../../../public/stars.svg'

export const ProfilePreview = () => {
  return (
    <div className={`flex`}>
      <Image className={`${styles.userLogo}`} src={rodriguesLogo} />
      <div className={`${styles.details}`}>
        <h1 className={`${styles.userName}`}>Rodrigues Veículos</h1>
        <small className={`${styles.userRate} flex`}>
          <p>4.9/5.0</p>
          <Image src={stars} />
        </small>
      </div>
    </div>
  )
}
