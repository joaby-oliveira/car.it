// Import  Next.js components
import Link from "next/link"

// Import styles
import styles from "./styles.module.scss"

export const Button = ({ href, children, secondary, fillParent }) => {
  return (
    <Link href={href}>
      <a className={`${styles.button} flex crossCenter ${secondary ? styles.secondary : ''} ${fillParent ? 'fillParent' : ''}`}>{children}</a>
    </Link>
  )
}