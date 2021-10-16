// Import  Next.js components
import Link from "next/link"

// Import styles
import styles from "./styles.module.scss"

export const Button = ({ href, children, secondary, fillParent, facebook, google, spacer, onClick }) => {
  return (
    <Link href={href}>
      <a
        className={` 
          ${styles.button} flex crossCenter mainCenter 
          ${secondary ? styles.buttonSecondary : ''} 
          ${fillParent ? styles.fillParent : ''} 
          ${facebook ? styles.facebook : ''}
          ${google ? styles.google : ''}
          ${spacer ? styles.spacer : ''}
      `}>{children}</a>
    </Link>
  )
}