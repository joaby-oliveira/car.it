import styles from "./styles.module.scss"

export const SelectTransmission = () => {
  
  return (
    <>
      <label className={styles.label}>Transmissão</label><br/>
      <select className={styles.select}>
        <option value="empty">-</option>
        <option value="manual">Manual</option>
        <option value="automatica">Automática</option>
      </select>
    </>
  )
}
