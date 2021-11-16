import { createContext, useState } from 'react'

export const RegisterContext = createContext()

export const RegisterStorage = ({ children }) => {

  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [cellphone, setCellphone] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <RegisterContext.Provider value={{
      name: { value: name, setName },
      lastname: { value: lastname, setLastname },
      cellphone: { value: cellphone, setCellphone },
      cpf: { value: cpf, setCpf },
      email: { value: email, setEmail },
      password: { value: password, setPassword }
    }}>
      {children}
    </RegisterContext.Provider>
  )
}
