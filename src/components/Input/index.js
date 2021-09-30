import styles from "./styles.module.scss"

export const Input = ({ name, label, type, placeholder }) => {
  return (
    <div className={`${styles.form} flex column`}>
      <label className={`${styles.formsLabel}`} htmlFor={name}>
        {label}
      </label>
      <input className={`${styles.formsInput}`} type={type} placeholder={placeholder} id={name} />
    </div>
  )
}
