import { useState } from 'react'

export const useForm = (type) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const types = {
    password: {
      regex: /^.{8,}$/,
      message: "Senha deve ter no minimo 8 caracteres"
    }
  }
  
  function validate() {
    if(type === false) return true
    if(value.length === 0) {
      setError('Preencha o campo')
      return false
    } else if(types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError('')
      return true
    }
  }

  function onChange({ target }) {
    let targetValue = target.value
    if(type === 'password' || type === 'username' || type === 'email') {
      targetValue = target.value.trim()
    }
    if(error !== '') validate(targetValue)
    setValue(targetValue)
  }

  return {
    value,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
    error
  }
}
