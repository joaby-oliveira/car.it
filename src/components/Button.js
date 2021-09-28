import Link from "next/link"

const Button = ({ href, children, secondary, fillParent }) => {
  return (
    <Link href={href}>
      <a className={`button flex crossCenter ${secondary ? 'buttonSecondary' : ''} ${fillParent ? 'fillParent' : ''}`}>{children}</a>
    </Link>
  )
}

export default Button
