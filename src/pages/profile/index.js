import styles from './styles.module.scss'
import { Box } from '../../components/Box'
import { ProfilePreview } from '../../components/ProfilePreview'
import { Navbar } from '../../components/Navbar'
import { ProfilDetailItem } from '../../components/ProfileDetailItem'


const Profile = () => {

  return (
    <main className={`${styles.container} page flex crossStart`}>
      <Navbar />
      <div className={`${styles.boxContainer} flex`}>
        <Box>
          <ProfilePreview className={`spacerAfter`} />
          <ProfilDetailItem className={`spacerAfter`} dataName='name' />
          <ProfilDetailItem className={`spacerAfter`} dataName='cellphone' />
          <ProfilDetailItem dataName='password' />
        </Box>
      </div>
    </main>
  )
}

export default Profile
