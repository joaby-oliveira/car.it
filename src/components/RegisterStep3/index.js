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


export const RegisterStep3 = (props) => {
  const registerData = useContext(RegisterContext)

  const email = useForm('email');
  const password = useForm('password');
  // const confirmPassword = useForm('confirmPassword');

  registerData.email.setEmail(email.value)
  registerData.password.setPassword(password.value)

  return (
    <div className={`${styles.container}`} animationType="rightToLeft">
      <Input label="Email" name="email" isEmail={true} {...email} placeholder="Ex: email@hotmail.com" />
      <Input label="Senha" name="password" isPassword={true} {...password} placeholder="No mínimo 8 dígitos" />
      {/* <Input label="Confirmar Senha" name="confirmPassword" {...confirmPassword} placeholder="Deve ser igual à anterior" /> */}

      <div className={`flex`}>
        <Button secondary={true} stepButton={true} onClick={props.prev}>Voltar etapa</Button>
        <Button form={true} >Finalizar</Button>
      </div>

      <Text center={true}>Ao criar uma conta, estará concordando com nossos <Link href="/"><a className={`${styles.termsAndConditions}`}>termos e condições.</a></Link></Text>
    </div>
  )
}