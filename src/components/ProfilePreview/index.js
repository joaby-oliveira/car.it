import Image from 'next/image'
import Link from 'next/Link'

import styles from './styles.module.scss'

import rodriguesLogo from '../../../public/rodriguesLogo.jpg'
import stars from '../../../public/stars.svg'

import { Title } from '../Title'

export const ProfilePreview = ({isProfilePage, className}) => {
  return (
    <div className={`${className} ${styles.previewContainer} ${isProfilePage ? styles.profile : ''} flex`}>
      <Image className={`${styles.userLogo}`} src={rodriguesLogo} />
      <div className={`${styles.details}`}>
        <Link href='/profile'>
          <a>
            <Title small={true}>Rodrigues Veículos</Title>
          </a>
        </Link>
        <small className={`${styles.userRate} flex`}>
          <p>4.9/5.0</p>
          <Image src={stars} />
        </small>
      </div>
    </div>
  )
}
