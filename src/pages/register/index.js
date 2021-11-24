// Import components
import Head from 'next/head'
import { Box } from '../../components/Box';
import { FormsLS } from "../../components/FormsLS";
import { ArrowBox } from "../../components/ArrowBox";
import { RegisterStep1 } from '../../components/RegisterStep1';
import { RegisterStep2 } from '../../components/RegisterStep2';
import { RegisterStep3 } from '../../components/RegisterStep3';
import { Steps, Step } from "react-step-builder";

// Import styles 
import styles from './styles.module.scss';
import { RegisterContext } from './RegisterContext';
import { useContext } from 'react';

const Register = () => {

  const registerData = useContext(RegisterContext)

  async function registerUser(e) {
    e.preventDefault()
    const userData = {
      name: `${registerData.name.value} ${registerData.lastname.value}`,
      phone: registerData.phone.value,
      password: registerData.password.value,
      email: registerData.email.value,
      cpfCnpj: registerData.cpfCnpj.value
    }
    console.log(userData)
    try {
      const result = await fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      console.log(result)
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
              <Step component={RegisterStep3} />
            </Steps>
          </form>
        </Box>
      </div>
    </div>
  )
}

export default Register