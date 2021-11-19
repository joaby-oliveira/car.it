import styles from "./styles.module.scss"

export const SelectDirection = () => {
  
  return (
    <>
      <label className={styles.label}>Direção</label><br/>
      <select className={styles.select}>
        <option value="empty">-</option>
        <option value="hidraulica">Hidráulica</option>
        <option value="manual">Manual</option>
        <option value="eletrica">Elétrica</option>
      </select>
    </>
  )
}
