// Import Next.js 
import Link from 'next/link'

// Import components
import { FiChevronLeft } from "react-icons/fi";

// Import styles
import styles from "./styles.module.scss"

export const ArrowBox = ({ href }) => {
  return (
    <div className={`${styles.arrowBox} flex`}>
      <Link href={href}>
        <a><FiChevronLeft size={30} /></a>
      </Link>
    </div>
  )
}