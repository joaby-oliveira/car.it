export const Title = ({white, center, children}) => {
  return (
    <h1 className={`title ${white ? 'white' : ''} ${center ? 'center' : ''}`}>
      {children}
    </h1>
  )
}
