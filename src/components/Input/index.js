import styles from "./styles.module.scss"

export const Input = ({ label, name, placeholder, value, onChange, onBlur, error, isPassword, isEmail, isNumber, type }) => {
  if(isPassword) type = "password"
  if(isEmail) type = "email"
  if(isNumber) type = "number"
  return (
    <>
      <div className={`${styles.inputBlock} flex column`}>
        <label
          htmlFor={name}
        >
          {label}
        </label>
        <input
          id={name}
          placeholder={placeholder}
          type={`${type}` ? type : "text"}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      {error && <p data-anime="leftToRight" className={`error`}>{error}</p>}
      </div>
    </>
  )
}
