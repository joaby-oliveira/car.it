import { useContext, useState } from "react"
import { GlobalContext } from "../../Context/GlobalContext"
import styles from "./styles.module.scss"

export const SelectFuel = () => {
  const { registerCarStep } = useContext(GlobalContext)
  const [fuel, setFuel] = useState('')

  function handleChange({ target }) {
    setFuel(target.value)
    registerCarStep.fuel.setFuel(fuel)
  }

  console.log(fuel)
  
  return (
    <>
      <label className={styles.label}>Combustível</label><br/>
      <select value={fuel} onChange={handleChange} className={styles.select}>
        <option value="empty">-</option>
        <option value="gasolina">Gasolina</option>
        <option value="etanol">Etanol</option>
        <option value="diesel">Diesel</option>
        <option value="glp">Gás natural</option>
        <option value="eletrico">Elétrico</option>
      </select>
    </>
  )
}
