import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {

  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [phone, setPhone] = useState('')
  const [cpfCnpj, setCpfCnpj] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const [cep, setCep] = useState('')
  // const [state, setState] = useState('')
  // const [city, setCity] = useState('')
  // const [district, setDistrict] = useState('')
  // const [street, setStreet] = useState('')
  // const [complement, setComplement] = useState('')

  return (
    <GlobalContext.Provider value={{
      registerUserStep: {
        name: { value: name, setName },
        lastname: { value: lastname, setLastname },
        phone: { value: phone, setPhone },
        cpfCnpj: { value: cpfCnpj, setCpfCnpj },
        email: { value: email, setEmail },
        password: { value: password, setPassword },
      }
      // cep: { value: cep, setCep },
      // state: { value: state, setState },
      // city: { value: city, setCity },
      // district: { value: district, setDistrict },
      // street: { value: street, setStreet },
      // complement: { value: complement, setComplement }
    }}>
      {children}
    </GlobalContext.Provider>
  )

}