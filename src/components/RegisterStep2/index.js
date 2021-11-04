// Import components
import { Input } from '../../components/Input';

// Import styles 
import { useForm } from '../../Hooks/useForm';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import styles from "./styles.module.scss"


export const RegisterStep2 = (props) => {
  const email = useForm('email');
  const password = useForm('password');
  const confirmPassword = useForm('confirmPassword');
  return (
    <div className={`${styles.container}`}>
      <Input label="Email" name="email" {...email} placeholder="Ex: email@hotmail.com" />
      <Input label="Senha" name="password" {...password} placeholder="No mínimo 8 dígitos" />
      <Input label="Confirmar Senha" name="confirmPassword" {...confirmPassword} placeholder="Deve ser igual à anterior" />

      <Button secondary={true} stepButton={true} onClick={props.prev}>Voltar etapa</Button>

      <Button stepButton={true} onClick={props.next}>Finalizar</Button>

      <Text center={true} >Ao criar uma conta, estará concordando com nossos termos e condições.</Text>
    </div>
  )
}