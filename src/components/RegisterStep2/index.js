// Import components
import { Input } from '../../components/Input';

// Import styles 
import { useForm } from '../../Hooks/useForm';
import { Button } from '../../components/Button';

export const RegisterStep2 = (props) => {
  const email = useForm('email');
  const password = useForm('password');
  const confirmPassword = useForm('confirmPassword');
  return (
    <>
      <Input label="Email" name="email" {...email} placeholder="Ex: email@hotmail.com" />
      <Input label="Senha" name="password" {...password} placeholder="No mínimo 8 dígitos" />
      <Input label="Confirmar Senha" name="confirmPassword" {...confirmPassword} placeholder="Deve ser igual à anterior" />
      <button onClick={props.prev}>Voltar</button>
      <button onClick={props.next}>Finalizar</button>
    </>
  )
}