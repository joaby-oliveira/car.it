import { Navbar } from '../../components/Navbar'
import { ProfilePreview } from '../../components/ProfilePreview'

import styles from './styles.module.scss'

const Home = () => {
  return (
    <div className={`page`} animationType="leftToRight">
      <Navbar />
      <ProfilePreview />
      Pagina inicial
    </div>
  )
}

export default Home
