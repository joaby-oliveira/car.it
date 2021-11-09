// Import components
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

// Import styles 
import { useForm } from '../../Hooks/useForm';

export const RegisterStep1 = (props) => {
  const name = useForm('name');
  const lastname = useForm('lastname');
  const cellphone = useForm('cellphone');
  return (
    <>
      <Input label="Nome" name="name" {...name} placeholder="Apenas o primeiro nome" />
      <Input label="Sobrenome" name="lastname" {...lastname} placeholder="Sobrenome completo" />
      <Input label="Celular" name="cellphone" {...cellphone} placeholder="Somente números" />
      <Button stepButton={true} onClick={props.next}>Próxima etapa</Button>
    </>
  )
}