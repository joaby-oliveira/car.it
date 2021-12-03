import { Input } from '../../components/Input';
import { SelectCondition } from "../SelectCondition"
import { Button } from './../Button/index';

import { useForm } from '../../Hooks/useForm';

import { RegisterCarContext } from './../../Context/registerCarContext';
import { useContext } from 'react';

export const RegisterCarStep1 = (props) => {

    const  { registerCarStep }  = useContext(RegisterCarContext)
    const modelo = useForm('modelo');
    const ano = useForm('ano');
    const select = useForm('select');
    const preco = useForm('preco');

    console.log(registerCarStep)
    // registerCarStep.ano.setAno(ano.value)
    // // //registerCarStep.select.setSelect(select.value)
    // registerCarStep.preco.setPreco(preco.value)

    console.log(modelo, ano, preco, select)
    
    return (
        <>
            <Input label="Modelo" name="modelo"  placeholder="Ex: Celta" {...modelo} />
            <Input label="Ano" name="ano" placeholder="Informe o ano do carro" type="number" {...ano} />
            <SelectCondition name="select" {...select} />
            <Input label="Preço" name="preco" placeholder="Digite somente números" type='number' {...preco} />
            <Button stepButton={true} onClick={props.next}>Próxima etapa</Button>
        </>
    )
}