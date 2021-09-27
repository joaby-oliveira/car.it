import styles from '../Landing.module.scss'
import Button from '../../../components/Button'
import Logo from '../../../components/Logo'

const Navbar = () => {
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

export default Navbar
