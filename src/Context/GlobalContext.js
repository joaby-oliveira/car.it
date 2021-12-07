import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {

  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [phone, setPhone] = useState('')
  const [cpfCnpj, setCpfCnpj] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [model, setModel] = useState('')
  const [direction, setDirection] = useState('')
  const [year, setYear] = useState('')
  const [status, setStatus] = useState('')
  const [price, setPrice] = useState('')
  const [additions, setAdditions] = useState({})
  const [transmission, setTransmission] = useState('')
  const [mileage, setMileage] = useState('')
  const [doors, setDoors] = useState('')
  const [fuel, setFuel] = useState('')
  const [brand, setBrand] = useState('')

  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
    cpf: '',
    cnpj: '',
  })

  const [login, setLogin] = useState(null)

  async function getUser(id) {
    const response = await fetch(`http://localhost:8080/user/${id}`)
    const json = await response.json()
    setLogin(true)
    setUserData({ ...json.data[0] })
  }


  async function userLogin(email, password) {
    const result = await fetch('http://localhost:8080/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credential: 'same-origin',
      body: JSON.stringify({
        email,
        password
      })
    })
    const json = await result.json()
    localStorage.setItem('token', json.data.token)

    getUser(json.data.id)
  }


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
      },
      registerCarStep: {
        model: { value: model, setModel },
        year: { value: year, setYear },
        status: { value: status, setStatus },
        price: { value: price, setPrice },
        direction: { value: direction, setDirection },
        additions: { value: additions, setAdditions },
        transmission: { value: transmission, setTransmission },
        mileage: { value: mileage, setMileage },
        doors: { value: doors, setDoors },
        fuel: { value: fuel, setFuel },
        direction: { value: direction, setDirection },
        brand: { value: brand, setBrand }
      },
      userData,
      userLogin,
      login
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