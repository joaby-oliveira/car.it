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
import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

const sell = () => {
  const { registerCarStep } = useContext(GlobalContext)
  async function registerCar(e) {
    e.preventDefault()
    const TOKEN = localStorage.getItem('loginToken')
    const userId = localStorage.getItem('userId')
    console.log(TOKEN)
    
    const submitData = {
      model: registerCarStep.model.value,
      brand: registerCarStep.brand.value,
      year: registerCarStep.year.value,
      vehicleType: registerCarStep.vehicleType.value,
      conservationState: registerCar.status.value,
      priceString: registerCarStep.priceString.value,
      steering: registerCarStep.direction.value,
      transmission: registerCarStep.transmission.value,
      doorString: registerCarStep.doorString.value,
      fuel: registerCarStep.fuel.value,
      description: registerCarStep.description.value,
      userId
    }
    
    const result = await fetch('http://localhost:8080/vehicle', {
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN
      }),
      body: JSON.stringify({...registerCarStep, userId})
    })
    console.log(registerCarStep)
    const data = await result.json()
    console.log(data)
  }

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
          <form onSubmit={registerCar} className={`forms`}>
            <Steps>
              <Step component={RegisterCarStep1} />
              <Step component={RegisterCarStep2} />
              <Step component={RegisterCarStep3} />
            </Steps>
          </form>
        </Box>
      </div>
    </div>
  )
}

export default sell