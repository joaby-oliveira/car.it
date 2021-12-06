import { Input } from "../Input"
import { SelectCondition } from "../SelectCondition"
import { Button } from './../Button/index'

import { GlobalContext } from "../../Context/GlobalContext"
import { useForm } from '../../Hooks/useForm';
import { useContext } from 'react';

// console.log(globalContext)

export const RegisterCarStep1 = (props) => {
    
    const { registerCarStep } = useContext(GlobalContext)

    const model = useForm('model');
    const year = useForm('year');
    const price = useForm('price');
    
    registerCarStep.model.setModel(model.value)
    registerCarStep.year.setYear(year.value)
    registerCarStep.price.setPrice(price.value)

    return (
        <>
            <Input {...model} label="Modelo" name="model" placeholder="Ex: Celta" />
            <Input {...year} label="Ano" name="year" placeholder="Informe o ano do carro" type="number" />
            <SelectCondition />
            <Input {...price} label="Preço" name="price" placeholder="Digite somente números" type='number' />
            <Button stepButton={true} onClick={props.next}>Próxima etapa</Button>
        </>
    )
}