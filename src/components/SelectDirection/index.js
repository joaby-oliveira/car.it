import { useContext, useState } from "react"
import { GlobalContext } from "../../Context/GlobalContext"
import styles from "./styles.module.scss"

export const SelectDirection = () => {
  const { registerCarStep } = useContext(GlobalContext)
  const [direction, setDirection] = useState('')

  function handleChange({ target }) {
    setDirection(target.value)
    registerCarStep.direction.setDirection(direction)
  }
  
  return (
    <>
      <label className={styles.label}>Direção</label><br />
      <select value={direction} onChange={handleChange} className={styles.select}>
        <option value="empty">-</option>
        <option value="hidraulica">Hidráulica</option>
        <option value="manual">Manual</option>
        <option value="eletrica">Elétrica</option>
      </select>
    </>
  )
}
