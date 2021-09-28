import Button from '../../components/Button';
import Box from '../../components/Box';
import styles from './styles.module.scss';

const index = () => {
  return (
    <div>
      <Box>
        <a className={`${styles.forgotPass}`} href="/forgotpass">Esqueceu a senha?</a>
        <Button fillParent={true} href="/">Entrar</Button>
        <hr />
        <h3>Não é registrado?<a href="">Registre-se</a></h3>
      </Box>
    </div>
  )
}

export default index