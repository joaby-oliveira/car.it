// Import styles
import styles from "./styles.module.scss"

export const Box = ({ children, padding = "medium" }) => {
  return (
    <div className={`${styles.box} ${padding === 'small' ? styles.small : ''} ${padding === 'medium' ? styles.medium : ''} ${padding === 'big' ? styles.big : ''} flex column mainCenter crossCenter`}>
      {children}
    </div>
  )
}