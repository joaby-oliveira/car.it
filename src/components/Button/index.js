// Import  Next.js components
import Link from "next/link"

import { FiSearch } from 'react-icons/fi'

// Import styles
import styles from "./styles.module.scss"

export const Button = ({ href, children, form, secondary, fillParent, facebook, google, spacer, onClick, stepButton, searchCar }) => {
  if (searchCar) {
    return (
      <button className={`${styles.button} ${styles.searchButton} flex crossCenter mainCenter `}>
        Procurar Carros
      </button>
    )
  }

  if (form) {
    return (
      <button className={` 
      ${styles.button} flex crossCenter mainCenter 
      ${styles.searchButton}
    `}>
        {children}
      </button>
    )
  }

  if (stepButton) {
    return (
      <button onClick={onClick} className={` 
      ${styles.button} flex crossCenter mainCenter 
      ${secondary ? styles.buttonSecondary : ''}
    `}>
        {children}
      </button>
    )
  }

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