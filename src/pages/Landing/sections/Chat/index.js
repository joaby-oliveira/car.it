// Import Nexts.js components
import Image from 'next/image'

// Import components
import { Title } from '../../../../components/Title'
import { Text } from '../../../../components/Text'

// Import styles
import styles from './styles.module.scss'

// Import images
import chatSmartphone from '../../../../../public/chatSmartphone.png'

export const Chat = () => {
  return (
    <section className={`${styles.chat} flex mainCenter crossCenter`}>
      <Image src={chatSmartphone} />
      <header>
        <Title>Conheça uma plataforma de negociação incrível</Title>
        <Text>
          Contamos com um chat que tem funcionalidades já conhecidas no mercado em aplicativos mensageiros populares
        </Text>
      </header>
    </section>
  )
}