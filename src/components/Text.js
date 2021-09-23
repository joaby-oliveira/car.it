export const Text = ({children, white}) => {
  return (
    <p className={`text ${white ? 'white' : ''}`}>
      {children}
    </p>
  )
}
