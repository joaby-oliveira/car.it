// Import components
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

// Import styles 
import { useForm } from '../../Hooks/useForm';
import { Text } from '../../components/Text';
import { Title } from '../../components/Title';
import styles from "./styles.module.scss"


export const PassStep2 = (props) => {
  const password = useForm('password');
  const confirmPassword = useForm('confirmPassword');
  return (
    <div className={`${styles.container}`}>
      <Title small={true} center={true} >Crie sua nova senha</Title>
      <Text center={true} >Coloque nos campos a seguir a sua nova senha</Text>

      <Input label="Senha" name="password" {...password} placeholder="No mínimo 8 dígitos" />
      <Input label="Confirmar Senha" name="confirmPassword" {...confirmPassword} placeholder="Deve ser igual à anterior" />
      
      <Button stepButton={true} onClick={props.next}>Definir nova senha</Button>

    </div>
  )
}