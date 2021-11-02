import { Navbar } from '../../components/Navbar'
import { ProfilePreview } from '../../components/ProfilePreview'

import Link from 'next/link'

import { FiSettings, FiBell } from 'react-icons/fi'

import styles from './styles.module.scss'

const Home = () => {
  return (
    <div className={`page`} animationType="leftToRight">
      <Navbar />
      <div className={`${styles.container}`}>
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
      </div>
    </div>
  )
}

export default Home
