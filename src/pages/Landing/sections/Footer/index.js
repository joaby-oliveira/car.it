// Import Next.js components
import Image from 'next/image'
import Link from 'next/link'

// Import components
import Logo from '../../../../components/Logo'

// Import images
import googlePlay from '../../../../../public/googlePlay.png'

// Import styles
import styles from './styles.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.superior} flex spaceBetween crossCenter`}>
        <Logo white={true} />
        <div className={`${styles.getApp} flex column crossCenter`}>
          <p>Baixe nosso aplicativo!</p>
          <a href="#" target="_blank"><Image src={googlePlay} /></a>
        </div>
      </div>
      <div className={`${styles.bottom} flex spaceBetween`}>
        <p>Copyright © 2021 Car.it - Todos direitos reservados</p>
        <div className={`flex crossCenter`}>
          <Link href="/termos-e-condicoes">
            <a>Termos e Condições</a>
          </Link>
          <span className={styles.spacer} />
          <Link href="/politica-de-privacidade">
            <a className={`flex crossCenter`}>Política de Privacidade</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
