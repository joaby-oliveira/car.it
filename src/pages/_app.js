import "../../styles/config/globals.scss"
import { GlobalStorage } from "../Context/GlobalContext"
function MyApp({ Component, pageProps }) {
  return <GlobalStorage><Component {...pageProps} /></GlobalStorage>
}

export default MyApp
