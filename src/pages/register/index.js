// Import components
import Head from 'next/head'
import { Box } from '../../components/Box';
import { FormsLS } from "../../components/FormsLS";
import { ArrowBox } from "../../components/ArrowBox";
import { RegisterStep1 } from '../../components/RegisterStep1';
import { RegisterStep2 } from '../../components/RegisterStep2';
import { RegisterStep3 } from '../../components/RegisterStep3';
import { Steps, Step } from "react-step-builder";
import router from 'next/router'
import { Text } from '../../components/Text'

// Import styles 
import { useContext, useState } from 'react';
import styles from './styles.module.scss';
import { GlobalContext } from '../../Context/GlobalContext';

const Register = () => {

  const { registerUserStep } = useContext(GlobalContext)
  const [registerStatus, setRegisterStatus] = useState('')

  async function registerUser(e) {
    e.preventDefault()
    const userData = {
      name: `${registerUserStep.name.value} ${registerUserStep.lastname.value}`,
      phone: registerUserStep.phone.value,
      password: registerUserStep.password.value,
      email: registerUserStep.email.value,
      cpfCnpj: registerUserStep.cpfCnpj.value
    }

    try {
      const result = await fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      const data = await result.json()
      !data.status ? setRegisterStatus({ msg: data.msg, status: false }) : setRegisterStatus({ msg: data.msg, status: 'Conta criada com sucesso!' })
      if (data.status) {
        setTimeout(() => {
          router.push('/login')
        }, 1000);
      }
      console.log(registerStatus)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={`${styles.registerContainer} flex crossCenter mainCenter fullHeight`}>
      <Head>
        <title>Car.it | Registro</title>
        <meta name="description" content="Anuncie e compre carros novos e usados na cidade de Marília" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FormsLS title="Faça sua conta" subtitle="Comece sua jornada em busca do carro perfeito!" />
      <div animationType="rightToLeft" className={`formsRS flex mainCenter`}>

        <ArrowBox href="/" />

        <Box padding="big">
          <form className={`forms`} onSubmit={registerUser}>
            <Steps>
              <Step component={RegisterStep1} />
              {/* <Step component={RegisterStep2} /> */}
              <Step component={RegisterStep3} registerStatus={registerStatus} />
            </Steps>
          </form>
        </Box>
      </div>
      {registerStatus.status && (
        <div className={`successRegisterModal flex mainCenter crossCenter`}>
          <Box small={true}>
            <h2>Conta criada com sucesso!</h2>
            <Text center={true}>Indo para a tela de login ;)</Text>
          </Box>
        </div>
      )}
    </div>
  )
}

export default Register