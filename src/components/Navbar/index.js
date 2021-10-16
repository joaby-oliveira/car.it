// Import Next.js 
import Link from 'next/link'

// Import styles
import styles from './styles.module.scss'

// Import button from 
import { Button } from '../Button'
import Logo from '../Logo'

export const Navbar = () => {
  return (
    <nav className={`${styles.navbar} flex spaceBetween crossCenter`}>
      <Link href="/">
        <a><Logo /></a>
      </Link>
      <div className={`${styles.buttonContainer} flex`}>
        <Button secondary={true} href="/login">Entrar</Button>
        <Button href="/register">Criar Conta</Button>
      </div>
    </nav>
  )
}