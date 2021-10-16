// Import  Next.js components
import Link from "next/link"

import { FiSearch } from 'react-icons/fi'

// Import styles
import styles from "./styles.module.scss"

export const Button = ({ href, children, form, secondary, fillParent, facebook, google, spacer, searchCar }) => {
  if (searchCar) {
    return (
      <div className={` 
      ${styles.button} flex crossCenter mainCenter 
      ${styles.searchButton}
    `}><FiSearch />Achar carros</div>
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

  return (
    <Link href={href}>
      <a className={` 
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