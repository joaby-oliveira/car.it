// Import components
import Head from 'next/head'
import { Box } from '../../components/Box';
import { FormsLS } from "../../components/FormsLS";
import { ArrowBox } from "../../components/ArrowBox";
import { RegisterCarStep1 } from '../../components/RegisterCarStep1';
import { RegisterStep2 } from '../../components/RegisterStep2';
import { Steps, Step } from "react-step-builder";

// Import styles 
import styles from './styles.module.scss';

const RegisterCar = () => {
  return (
    <div className={`${styles.registerContainer} flex crossCenter mainCenter fullHeight`}>
      <Head>
        <title>Car.it | Vender</title>
        <meta name="description" content="Anuncie e compre carros novos e usados na cidade de Marília" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FormsLS title="Vender carro" />
      
      <div animationtype="rightToLeft" className={`formsRS flex mainCenter`}>

        <ArrowBox href="/" />

        <Box>
          <form className={`forms`}>
            <Steps>
              <Step component={RegisterCarStep1}/>
              <Step component={RegisterStep2}/>
            </Steps>
          </form>
        </Box>

      </div>


    </div>
  )
}

export default RegisterCar