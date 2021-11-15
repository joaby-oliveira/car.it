import styles from './styles.module.scss'
import { Box } from '../../components/Box'
import { ProfilePreview } from '../../components/ProfilePreview'
import { Navbar } from '../../components/Navbar'


const Profile = () => {
  return (
    <main className={`${styles.container} page flex crossStart`}>
      <Navbar />
      <div className={`${styles.boxContainer} flex`}>
        <Box>
          <ProfilePreview className={`spacerAfter`}/>
        </Box>
      </div>
    </main>
  )
}

export default Profile
