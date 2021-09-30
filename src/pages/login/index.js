// Import components
import { Button } from '../../components/Button';
import { Box } from '../../components/Box';
import { Input } from '../../components/Input';
import { FaFacebookF, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";
import LoginImage from '../../components/LoginImage';
import Logo from '../../components/Logo';

// Import styles 
import styles from './styles.module.scss';

const Login = () => {
  return (
    <div className={`flex crossCenter mainCenter fullHeight`}>
      <div className={`${styles.loginLS} flex column mainCenter crossCenter`}>
        <Logo className={`${styles.logoLogin}`} white={true} />
        <h1 className={`${styles.loginTitle}`}>Faça seu login</h1>
        <p className={`${styles.loginSubtitle}`}>Bem vindo de volta!</p>
        <LoginImage />
      </div>

      <div className={`${styles.loginRS} flex mainCenter`}>

        <div className={`${styles.arrowBox} flex`}>
          <a href="/"><FiChevronLeft size={30}/></a>
        </div>
        

          <Box>
            <Logo className={`${styles.logoLogin}`} />

            <form className={`${styles.formsLogin}`}>
              <Input label="Email" name="email" type="email" placeholder="Ex: email@hotmail.com"> </Input>
              <Input label="Senha" name="password" type="password" placeholder="No mínimo 8 caracteres"> </Input>
              <a className={`${styles.forgotPass}`} href="/forgotpass">Esqueceu a senha?</a>
            </form>
            
            <Button fillParent={true} spacer={true} href="/" >Entrar</Button>
            <h3 className={`${styles.loginText}`}>Entrar usando outras contas</h3>
            <div className={`${styles.btnContainer} flex`}>
              <Button fillParent={true} google={true} href="/"> <FaGoogle /> </Button>
              <Button fillParent={true} facebook={true} href="/"> <FaFacebookF /> </Button>
            </div>
            <h3 className={`${styles.loginText}`}>Não é cadastrado?<a href="/"> Registre-se</a></h3>
          </Box>
        
      </div>
    </div>
  )
}

export default Login