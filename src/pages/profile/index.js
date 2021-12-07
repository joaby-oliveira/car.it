import styles from './styles.module.scss'
import { Box } from '../../components/Box'
import { ProfilePreview } from '../../components/ProfilePreview'
import { Navbar } from '../../components/Navbar'
import { ProfilDetailItem } from '../../components/ProfileDetailItem'
import { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'


const Profile = () => {
  const { userData } = useContext(GlobalContext)
  console.log(userData.name)
  return (
    <main className={`${styles.container} page flex crossStart`}>
      <Navbar />
      <div className={`${styles.boxContainer} flex`}>
        <Box>
          {userData && (
            <>
              <ProfilePreview className={`spacerAfter`} />
              <ProfilDetailItem className={`spacerAfter`} dataName={userData.name} />
              <ProfilDetailItem className={`spacerAfter`} dataName={userData.phone} />
              <ProfilDetailItem dataName='********' />
            </>
          )}
        </Box>
      </div>
    </main>
  )
}

export default Profile
