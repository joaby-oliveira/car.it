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

        <Box>

          <form className={`forms`}>
            <Input label="Email" name="email" {...email} placeholder="Ex.: email@dominio.com" />
            <Input label="Senha" name="password" {...password} placeholder="No mínimo 8 caracteres" />
            <a className={`${styles.forgotPass}`} href="/forgotpass">Esqueceu a senha?</a>
          </form>

          <Button fillParent={true} spacer={true} href="/" >Entrar</Button>
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