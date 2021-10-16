// Import Next.js 
import Link from 'next/link'

// Import styles
import styles from './styles.module.scss'

import { FiHome, FiDollarSign, FiMessageSquare, FiUser, FiSearch } from 'react-icons/fi'

// Import button from 
import { Button } from '../Button'
import { Text } from '../Text'
import Logo from '../Logo'

export const Navbar = ({ landing }) => {
  if (landing) {
    return (
      <nav className={`${styles.landingNavbar} flex spaceBetween crossCenter`}>
        <Link href="/">
          <a><Logo /></a>
        </Link>
        <div className={`${styles.buttonContainer} flex`}>
          <Button secondary={true} href="/login">Entrar</Button>
          <Button href="/criar-conta">Criar Conta</Button>
        </div>
      </nav>
    )
  }
  return (
    <nav className={`${styles.navbar} flex spaceBetween crossCenter`}>
      <Logo white={true} />
      <ul className={`flex`}>
        <li className={`${styles.navItem}`}>
          <Link href="/home">
            <a className={`flex crossCenter`}>
              <FiHome className={`${styles.icons}`} />
              <Text white={true}>Início</Text>
            </a>
          </Link>
        </li>

        <li className={`${styles.navItem}`}>
          <Link href="/sell">
            <a className={`flex crossCenter`}>
              <FiDollarSign className={`${styles.icons}`} />
              <Text white={true}>Vender</Text>
            </a>
          </Link>
        </li>

        <li className={`${styles.navItem}`}>
          <Link href="/chat">
            <a className={`flex crossCenter`}>
              <FiMessageSquare className={`${styles.icons}`} />
              <Text white={true}>Mensagens</Text>
            </a>
          </Link>
        </li>

        <li className={`${styles.navItem}`}>
          <Link href="/account">
            <a className={`flex crossCenter`}>
              <FiUser className={`${styles.icons}`} />
              <Text white={true}>Conta</Text>
            </a>
          </Link>
        </li>
      </ul>

      <Button searchCar={true}>asd</Button>
    </nav>
  )
}