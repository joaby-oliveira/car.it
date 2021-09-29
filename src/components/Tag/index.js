// Import styles
import styles from "./styles.module.scss"

export const Tag = ({children}) => {
  return (
    <span className={styles.tag}>
      {children}
    </span>
  )
}
