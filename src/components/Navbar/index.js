// Import styles
import styles from './styles.module.scss'

// Import button from 
import {Button} from '../Button'
import Logo from '../Logo'

export const Navbar = () => {
  return (
    <nav className={`${styles.navbar} flex spaceBetween`}>
      <Logo />
      <div className={`flex `}>
        <Button secondary={true} href="/login">Entrar</Button>
        <Button href="/criar-conta">Criar Conta</Button>
      </div>
    </nav>
  )
}