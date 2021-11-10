import { Navbar } from '../../components/Navbar'
import { ProfilePreview } from '../../components/ProfilePreview'
import { Box } from '../../components/Box'
import { Title } from '../../components/Title'
import { Text } from '../../components/Text'

import Link from 'next/link'

import { FiUser, FiSettings, FiHeart, FiBell, FiMoon, FiLogOut } from 'react-icons/fi'
import { AiOutlineCar } from 'react-icons/ai'
import { WiMoonAltThirdQuarter } from 'react-icons/wi'

import styles from './styles.module.scss'
import { Button } from '../../components/Button'

const Profile = () => {
  return (
    <div className={`${styles.profile} page`} animationType="leftToRight">
      <Navbar />
      <div className={`${styles.container} flex column`}>
        <div className={`${styles.profileBar} flex spaceBetween crossCenter`}>
          <ProfilePreview isProfilePage={true} />
        </div>
        <div className={`${styles.boxContainer}`}>
          <Box>
            <ul className={`${styles.linkList}`}>
              <li>
                <Link href="/profile">
                  <a className={`flex crossCenter`}>
                    <FiUser size={28} />
                    <div className={`${styles.textContainer} mainStart crossStart flex column`}>
                      <Title small={true} center={true}>Ver perfil</Title>
                      <Text>Tela de perfil, ver dados, editar dados</Text>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <a className={`flex crossCenter`}>
                    <AiOutlineCar size={24} />
                    <div className={`${styles.textContainer} mainStart crossStart flex column`}>
                      <Title small={true} center={true}>Meus carros</Title>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <a className={`flex crossCenter`}>
                    <FiSettings size={24} />
                    <div className={`${styles.textContainer} mainStart crossStart flex column`}>
                      <Title small={true} center={true}>Configurações</Title>
                      <Text>Notificações, status, tamanho da fonte...</Text>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <a className={`flex crossCenter`}>
                    <FiHeart size={24} />
                    <div className={`${styles.textContainer} mainStart crossStart flex column`}>
                      <Title small={true} center={true}>Favoritos</Title>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <a className={`flex crossCenter`}>
                    <FiBell size={24} />
                    <div className={`${styles.textContainer} mainStart crossStart flex column`}>
                      <Title small={true} center={true}>Notificações</Title>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <a className={`flex crossCenter`}>
                    <FiLogOut size={24} />
                    <div className={`${styles.textContainer} mainStart crossStart flex column`}>
                      <Title small={true} center={true}>Sair</Title>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>

            <Button dark={true} href="/" ><WiMoonAltThirdQuarter size={24} />Mudar para modo escuro</Button>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Profile
