// Import styles
import styles from "./styles.module.scss"

export const Text = ({children, white, center}) => {
  return (
    <p className={`${styles.text} ${white ? styles.white : ''} ${center ? styles.center : ''}`}>
      {children}
    </p>
  )
}
