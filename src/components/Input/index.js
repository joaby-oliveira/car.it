import styles from "./styles.module.scss"

export const Input = ({ label, name, placeholder, value, onChange, onBlur, error }) => {
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
          type="text"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      {error && <p data-anime="bottomTopTop" className={`${styles.error} animate`}>{error}</p>}
      </div>
    </>
  )
}
