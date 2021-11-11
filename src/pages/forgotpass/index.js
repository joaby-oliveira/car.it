// Import components
import Head from 'next/head'
import { Box } from '../../components/Box';
import { FormsLS } from "../../components/FormsLS";
import { ArrowBox } from "../../components/ArrowBox";
import { PassStep1 } from '../../components/PassStep1';
import { PassStep2 } from '../../components/PassStep2';
import { PassStep3 } from '../../components/PassStep3';
import { Steps, Step } from "react-step-builder";

// Import styles 
import styles from './styles.module.scss';

const forgotPass = () => {
  return (
    <div className={`${styles.registerContainer} flex crossCenter mainCenter fullHeight`}>
      <Head>
        <title>Car.it | Recuperar senha</title>
        <meta name="description" content="Anuncie e compre carros novos e usados na cidade de Marília" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FormsLS title="Recupere sua conta" subtitle="Nunca compartilhe sua senha!" />
      
      <div animationType="rightToLeft" className={`formsRS flex mainCenter`}>

        <ArrowBox href="/" />

        <Box>
          <form className={`forms`}>
            <Steps>
              <Step component={PassStep1}/>
              <Step component={PassStep2}/>
              <Step component={PassStep3}/>
            </Steps>
          </form>
        </Box>

      </div>


    </div>
  )
}

export default forgotPass