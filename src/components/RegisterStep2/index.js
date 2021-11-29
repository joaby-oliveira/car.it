// Import Next.js 
import Link from 'next/link'

// Import components
import { Input } from '../../components/Input'

// Import styles 
import { useForm } from '../../Hooks/useForm'
import { Button } from '../../components/Button'
import { Text } from '../../components/Text'
import styles from "./styles.module.scss"
import { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'


export const RegisterStep2 = (props) => {
  // const {registerUserStep} = useContext(GlobalContext)

  const cep = useForm('cep')
  const state = useForm('state')
  const city = useForm('city')
  const district = useForm('district')
  const street = useForm('street')
  const complement = useForm('complement')

//   registerUserStep.cep.setCep(cep.value)
// registerUserStep.state.setState(state.value)
//   registerUserStep.city.setCity(city.value)
//   registerUserStep.district.setDistrict(district.value)
//   registerUserStep.street.setStreet(street.value)
//   registerUserStep.complement.setComplement(complement.value)

  return (
    <div className={`${styles.container}`} animationType="rightToLeft">
      <div className={`flex column ${styles.inputContainer}`}>
        <Input label="CEP" name="cep" {...cep} placeholder="Somente números" />
        <Input label="Estado" name="state" {...state} placeholder="Somente números" />
        <Input label="Cidade" name="city" {...city} placeholder="Somente números" />
        <Input label="Bairro" name="district" {...district} placeholder="Somente números" />
        <Input label="Rua" name="street" {...street} placeholder="Somente números" />
        <Input label="Complemento" name="complement" {...complement} placeholder="Somente números" />
      </div>

      <div className={`flex`}>
        <Button secondary={true} stepButton={true} onClick={props.prev}>Voltar etapa</Button>
        <Button stepButton={true} onClick={props.next} >Próxima etapa</Button>
      </div>

      <Text center={true} >Ao criar uma conta, estará concordando com nossos <Link href="/">termos e condições.</Link></Text>
    </div>
  )
}