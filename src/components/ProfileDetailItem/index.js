import styles from './styles.module.scss'
import { Title } from '../Title'
import { Text } from '../Text'
import { FiEdit2 } from 'react-icons/fi'

export const ProfilDetailItem = ({ dataName, className }) => {
  return (
    <div className={`${styles.container} ${className} flex spaceBetween`}>
      <div className={`flex column`}>
        <Title small={true}>
          {dataName === 'name' && ('Nome')}
          {dataName === 'cellphone' && ('Celular')}
          {dataName === 'password' && ('Senha')}
        </Title>
        <Text>
          {dataName}
        </Text>
      </div>
      <span className={`${styles.editButton} flex mainCenter crossCenter`}>
        <FiEdit2 size={24}/>
      </span>
    </div>
  )
}
