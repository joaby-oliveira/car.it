// Import styles
import styles from "./styles.module.scss"

export const Title = ({ white, center, small, medium, children }) => {
  if (small || medium) {
    return (
      <h2 className={`${styles.title} ${white ? styles.white : ''} ${center ? styles.center : ''} ${small ? styles.small : ''} ${medium ? styles.medium : ''}`}>
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
