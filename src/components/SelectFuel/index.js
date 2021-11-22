import styles from "./styles.module.scss"

export const SelectFuel = () => {
  
  return (
    <>
      <label className={styles.label}>Combustível</label><br/>
      <select className={styles.select}>
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
