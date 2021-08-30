import styles from '../Landing.module.scss'

const Tag = ({children}) => {
  return (
    <span className={styles.tag}>
      {children}
    </span>
  )
}

export default Tag
