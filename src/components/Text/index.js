// Import styles
import styles from "./styles.module.scss"

export const Text = ({children, white}) => {
  return (
    <p className={`text ${white ? 'white' : ''}`}>
      {children}
    </p>
  )
}
