import { useContext, useState } from "react"
import { GlobalContext } from "../../Context/GlobalContext"
import styles from "./styles.module.scss"

export const SelectTransmission = () => {
  const {registerCarStep} = useContext(GlobalContext)
  const [transmission, setTransmission] = useState('')

  function handleChange({ target }) {
    setTransmission(target.value)
    registerCarStep.transmission.setTransmission(transmission)
    console.log(registerCarStep)
  }

  return (
    <>
      <label className={styles.label}>Transmissão</label><br/>
      <select value={transmission} onChange={handleChange} className={styles.select}>
        <option value="empty">-</option>
        <option value="manual">Manual</option>
        <option value="automatica">Automática</option>
      </select>
    </>
  )
}
