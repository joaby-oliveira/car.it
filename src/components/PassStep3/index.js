// Import Next.js 
import Link from 'next/link'

// Import components
import { Button } from '../../components/Button';

// Import styles 
import { Text } from '../../components/Text';
import { Title } from '../../components/Title';
import styles from "./styles.module.scss"


export const PassStep3 = (props) => {
  return (
    <div className={`${styles.container}`}>
      <Title small={true} center={true} >Senha alterada</Title>
      <Text center={true} >Recuperação concluída com sucesso!</Text>
      
      <Button href="/login" >Voltar ao login</Button>

    </div>
  )
}