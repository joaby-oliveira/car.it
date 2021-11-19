import { Input } from "../Input"
import { SelectCondition } from "../SelectCondition"
import { Button } from './../Button/index';


export const RegisterCarStep1 = (props) => {
    return (
        <>
            <Input label="Modelo" name="modelo" placeholder="Ex: Celta" />
            <Input label="Ano" name="ano" placeholder="Informe o ano do carro" type="number" />
            <SelectCondition />
            <Input label="Preço" name="preco" placeholder="Digite somente números" type='number' />
            <Button stepButton={true} onClick={props.next}>Próxima etapa</Button>
        </>
    )
}