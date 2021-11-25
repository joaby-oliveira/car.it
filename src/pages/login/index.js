// Import Next.js 
import Link from 'next/link'

// Import Next.js components
import router from 'next/router'

// Import React hooks
import { useState } from 'react'

// Import components
import Head from 'next/head'
import { Button } from '../../components/Button';
import { Box } from '../../components/Box';
import { Input } from '../../components/Input';
import { FaFacebookF, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { FormsLS } from '../../components/FormsLS';
import { ArrowBox } from "../../components/ArrowBox";

// Import styles 
import styles from './styles.module.scss';
import { useForm } from '../../Hooks/useForm';

const Login = () => {
  const email = useForm('email')
  const password = useForm('password')

  const [loginErrorMessage, setLoginErrorMessage] = useState('')

  async function auth(e) {
    e.preventDefault()
    const result = await fetch('http://localhost:8080/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credential: 'same-origin',
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })
    const {data} = await result.json()
    if (data.token) {
      localStorage.setItem('loginToken', data.token)
      router.push('/home')
    } else {
      setLoginErrorMessage('Email ou senha inválidos')
    }
  }
  return (
    <div className={`${styles.loginContainer} flex crossCenter mainCenter fullHeight`}>
      <Head>
        <title>Car.it | Login</title>
        <meta name="description" content="Anuncie e compre carros novos e usados na cidade de Marília" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <FormsLS title="Faça seu login" subtitle="Bem vindo de volta!" />


      <div animationType="rightToLeft" className={`formsRS flex mainCenter`}>

        <ArrowBox href="/" />
        <Box padding="big">

          <form onSubmit={auth} className={`${styles.formsLogin}`}>
            <Input isEmail={true} label="Email" name="email" {...email} placeholder="Ex.: email@dominio.com" />
            <Input isPassword={true} label="Senha" name="password" {...password} placeholder="No mínimo 8 caracteres" />
            <a className={`${styles.forgotPass}`} href="/forgotpass">Esqueceu a senha?</a>
            <Button form={true} fillParent={true} spacer={true} href="/" >Entrar</Button>
          </form>

          <p className={`error`}>{loginErrorMessage}</p>
          <div className={`${styles.btnContainer} flex`}>
            <Button fillParent={true} google={true} href="/"> <FaGoogle /> </Button>
            <Button fillParent={true} facebook={true} href="/"> <FaFacebookF /> </Button>
          </div>
          <h3 className={`${styles.loginText}`}>Não é cadastrado?<a href="/register"> Registre-se</a></h3>
        </Box>
      </div>
    </div>
  )
}

export default Login