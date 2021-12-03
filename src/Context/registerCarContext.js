import { createContext, useState } from "react";

export const RegisterCarContext = createContext()

export const GlobalStorage = ({ children }) => {

  const [modelo, setModelo] = useState('')
  //const [select, setSelect] = useState('')
  const [ano, setAno] = useState('')
  const [preco, setPreco] = useState('')
  

  return (
    <RegisterCarContext.Provider value={{
      registerCar: {
        modelo: { value: modelo, setModelo },
        ano: {value: ano, setAno },
        preco: { preco, setPreco },
        //select: {value: select, setSelect}
      }
    }}>
      {children}
    </RegisterCarContext.Provider>
  )

}