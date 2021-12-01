import { Input } from "../Input"
import { Button } from './../Button/index';
import { SelectFuel } from './../SelectFuel/index';



export const RegisterCarStep3 = (props) => {
    return (
        <>
            <Input label="Portas" name="portas" placeholder="Número de portas" type='number' />

            <SelectFuel />

            <Button secondary={true} stepButton={true} onClick={props.prev}>Voltar etapa</Button>
            <Button stepButton={true} onClick={props.next}>Anunciar carro à venda</Button>
        </>
    )
}