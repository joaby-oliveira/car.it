import "../../styles/config/globals.scss"
import { RegisterStorage } from "./register/RegisterContext"
function MyApp({ Component, pageProps }) {
  return <RegisterStorage><Component {...pageProps} /></RegisterStorage>
}

export default MyApp
