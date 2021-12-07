import { Navbar } from '../../components/Navbar'
import { ProfilePreview } from '../../components/ProfilePreview'
import { Box } from '../../components/Box'
import { Title } from '../../components/Title'
import { Text } from '../../components/Text'
import Head from 'next/head'

import Link from 'next/link'

import { FiUser, FiSettings, FiHeart, FiBell, FiLogOut } from 'react-icons/fi'
import { AiOutlineCar } from 'react-icons/ai'
import { WiMoonAltThirdQuarter } from 'react-icons/wi'

import styles from './styles.module.scss'
import { Button } from '../../components/Button'

const Account = () => {
  return (
    <div className={`${styles.account} page flex `}>
      <Head>
        <title>Car.it | Conta</title>
        <meta name="description" content="Anuncie e compre carros novos e usados na cidade de Marília" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div animationType="leftToRight" className={`${styles.container} flex column`}>
        <div className={`${styles.accountBar} flex spaceBetween crossCenter`}>
          <ProfilePreview isProfilePage={true} />
        </div>
        <div className={`${styles.boxContainer}`}>
          <Box padding="big">
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
                <Link href="/garage">
                  <a className={`flex crossCenter`}>
                    <AiOutlineCar size={24} />
                    <div className={`${styles.textContainer} mainStart crossStart flex column`}>
                      <Title small={true} center={true}>Meus carros</Title>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
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
                <Link href="/favorites">
                  <a className={`flex crossCenter`}>
                    <FiHeart size={24} />
                    <div className={`${styles.textContainer} mainStart crossStart flex column`}>
                      <Title small={true} center={true}>Favoritos</Title>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className={`flex crossCenter`}>
                    <FiBell size={24} />
                    <div className={`${styles.textContainer} mainStart crossStart flex column`}>
                      <Title small={true} center={true}>Notificações</Title>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
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

export default Account
