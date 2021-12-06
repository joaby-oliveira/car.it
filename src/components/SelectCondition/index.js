import { useContext, useState } from "react"
import { GlobalContext } from "../../Context/GlobalContext"
import styles from "./styles.module.scss"

export const SelectCondition = () => {
  const { registerCarStep } = useContext(GlobalContext)
  const [status, setStatus] = useState('')

  function handleChange({ target }) {
    setStatus(target.value)
    registerCarStep.status.setStatus(status)
  }

  console.log(registerCarStep)
  return (
    <>
      <label className={styles.label}>Estado</label><br />
      <select value={status} onChange={handleChange} className={styles.select}>
        <option value="empty">-</option>
        <option value="novo">Novo</option>
        <option value="seminovo">Seminovo</option>
        <option value="usado">Usado</option>
      </select>
    </>
  )
}
