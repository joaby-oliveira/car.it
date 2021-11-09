import { Navbar } from '../../components/Navbar'
import { ProfilePreview } from '../../components/ProfilePreview'

import Link from 'next/link'

import { FiSettings, FiBell } from 'react-icons/fi'

import styles from './styles.module.scss'
import { CarPreview } from '../../components/CarPreview'
import { Title } from '../../components/Title'
import { ActionButton } from '../../components/ActionButton'

const Home = () => {
  return (
    <div className={`page`} animationType="leftToRight">
      <Navbar />
      <div className={`${styles.container} flex column`}>
        <div className={`${styles.profileBar} flex spaceBetween crossCenter spacerAfter`}>
          <ProfilePreview />
          <div className={`${styles.profileActions} flex`}>
            <Link href="/settings">
              <a className={`${styles.button} flex mainCenter crossCenter`}>
                <FiSettings size={24} />
              </a>
            </Link>
            <Link href="/notification">
              <a className={`${styles.button} flex mainCenter crossCenter`}>
                <FiBell size={24} />
              </a>
            </Link>
          </div>
        </div>
        <div className={`${styles.actionsListContainer} flex column`}>
          <Title small={true}>
            Sugestões para você
          </Title>
          <div className={`${styles.actionsList} flex`}>
            <ActionButton fipe={true}/>
            <ActionButton fipe={true}/>
            <ActionButton fipe={true}/>
            <ActionButton fipe={true}/>
            <ActionButton fipe={true}/>
          </div>
        </div>
        <div className={`${styles.actionsListContainer} flex column`}>
          <Title small={true}>
            Talvez goste desses carros
          </Title>
          <div className={`${styles.actionsList}`}>
            <div className="actionsList">
              <CarPreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
