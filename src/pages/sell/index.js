// Import components
import Head from 'next/head'
import { Box } from '../../components/Box';
import { FormsLS } from "../../components/FormsLS";
import { ArrowBox } from "../../components/ArrowBox";
import { RegisterCarStep1 } from '../../components/RegisterCarStep1';
import { RegisterCarStep2 } from '../../components/RegisterCarStep2';
import { RegisterCarStep3 } from '../../components/RegisterCarStep3';

import { Steps, Step } from "react-step-builder";

// Import styles 
import styles from './styles.module.scss';

const sell = () => {
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
              <Step component={RegisterCarStep2}/>
              <Step component={RegisterCarStep3}/>
            </Steps>
          </form>
        </Box>
      </div>
    </div>
  )
}

export default sell