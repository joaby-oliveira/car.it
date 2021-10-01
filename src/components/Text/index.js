// Import styles
import styles from "./styles.module.scss"

export const Text = ({children, white}) => {
  return (
    <p className={`${styles.text} ${white ? styles.white : ''}`}>
      {children}
    </p>
  )
}
