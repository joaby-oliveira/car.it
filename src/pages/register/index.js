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
  console.log(registerData.cpfCnpj.value)
  
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
          <form className={`forms`}>
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