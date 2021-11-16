// Import Next.js 
import Link from 'next/link'

// Import components
import { Input } from '../../components/Input';

// Import styles 
import { useForm } from '../../Hooks/useForm';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import styles from "./styles.module.scss"
import { useContext } from 'react';
import { RegisterContext } from '../../pages/register/RegisterContext';


export const RegisterStep2 = (props) => {
  const email = useForm('email');
  const password = useForm('password');
  const confirmPassword = useForm('confirmPassword');
  const registerData = useContext(RegisterContext)

  return (
    <div className={`${styles.container}`}>
      <Input label="Email" name="email" {...email} placeholder="Ex: email@hotmail.com" />
      <Input label="Senha" name="password" {...password} placeholder="No mínimo 8 dígitos" />
      <Input label="Confirmar Senha" name="confirmPassword" {...confirmPassword} placeholder="Deve ser igual à anterior" />
      
      <div className={`flex`}>
        <Button secondary={true} stepButton={true} onClick={props.prev}>Voltar etapa</Button>
        <Button href="/login" >Finalizar</Button>
      </div>

      <Text center={true} >Ao criar uma conta, estará concordando com nossos <Link href="/">termos e condições.</Link></Text>
    </div>
  )
}