import Link from "next/link"

const Button = ({ href, children, secondary }) => {
  return (
    <Link href={href}>
      <a className={`button flex crossCenter ${secondary ? 'buttonSecondary' : ''}`}>{children}</a>
    </Link>
  )
}

export default Button
