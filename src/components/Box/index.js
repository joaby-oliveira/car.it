// Import styles
import styles from "./styles.module.scss"

export const Box = ({ children }) => {
  return (
    <div className="box flex column mainCenter crossCenter">
      {children}
    </div>
  )
}