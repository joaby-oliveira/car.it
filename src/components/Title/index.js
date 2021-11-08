// Import styles
import styles from "./styles.module.scss"

export const Title = ({ white, center, small, children }) => {
  if (small) {
    return (
      <h2 className={`${styles.title} ${white ? styles.white : ''} ${center ? styles.center : ''} ${small ? styles.small : ''}`}>
        {children}
      </h2>
    )
  }
  return (
    <h1 className={`${styles.title} ${white ? styles.white : ''} ${center ? styles.center : ''}`}>
      {children}
    </h1>
  )
}
