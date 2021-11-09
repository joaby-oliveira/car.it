// Import components
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

// Import styles 
import { useForm } from '../../Hooks/useForm';
import { Text } from '../../components/Text';
import { Title } from '../../components/Title';
import styles from "./styles.module.scss"


export const PassStep1 = (props) => {
  const email = useForm('email');
  return (
    <div className={`${styles.container}`}>
      <Title small={true} center={true} >Preencha seu e-mail</Title>
      <Text center={true} >Enviaremos um código ao seu e-mail após essa etapa</Text>

      <Input label="Email" name="email" {...email} placeholder="Ex: email@hotmail.com" />
      
      <Button stepButton={true} onClick={props.next}>Receber código</Button>

    </div>
  )
}