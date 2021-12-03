import styles from "./styles.module.scss"

export const SelectCondition = (name) => {
  
  return (
    <>
      <label className={styles.label}>Estado</label><br/>
      <select name={`${name}`} className={styles.select}>
        <option value="empty">-</option>
        <option value="novo">Novo</option>
        <option value="seminovo">Seminovo</option>
        <option value="usado">Usado</option>
      </select>
    </>
  )
}
