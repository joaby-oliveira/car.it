// Import components
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

// Import styles 
import { useForm } from '../../Hooks/useForm';
import { GlobalContext } from '../../Context/GlobalContext';
import { useContext } from 'react';

export const RegisterStep1 = (props) => {

  const { registerUserStep } = useContext(GlobalContext)

  const name = useForm('name');
  const lastname = useForm('lastname');
  const phone = useForm('phone');
  const cpfCnpj = useForm('cpfCnpj');

  registerUserStep.name.setName(name.value)
  registerUserStep.lastname.setLastname(lastname.value)
  registerUserStep.phone.setPhone(phone.value)
  registerUserStep.cpfCnpj.setCpfCnpj(cpfCnpj.value)

  console.log(registerUserStep)

  return (
    <div animationType="rightToLeft">
      <Input label="Nome" name="name" {...name} placeholder="Apenas o primeiro nome" />
      <Input label="Sobrenome" name="lastname" {...lastname} placeholder="Sobrenome completo" />
      <Input label="Celular" name="phone" isNumber={true} {...phone} placeholder="Somente números com DDD" />
      <Input label="CPF / CNPJ" name="cpf" isNumber={true} maxlength={10} {...cpfCnpj} placeholder="Somente números" />
      <Button stepButton={true} onClick={props.next}>Próxima etapa</Button>
    </div>
  )
}