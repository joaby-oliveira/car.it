// Import styles
import styles from "./styles.module.scss"

export const Title = ({white, center, children}) => {
  return (
    <h1 className={`${styles.title} ${white ? styles.white : ''} ${center ? styles.center : ''}`}>
      {children}
    </h1>
  )
}
