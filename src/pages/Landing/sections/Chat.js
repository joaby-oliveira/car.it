import Image from 'next/image'
import { Title } from '../../../components/Title'
import styles from '../Landing.module.scss'
import chatSmartphone from '../../../../public/chatSmartphone.png'
import { Text } from '../../../components/Text'

const Chat = () => {
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

export default Chat
