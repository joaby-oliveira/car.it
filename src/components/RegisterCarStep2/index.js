import { Input } from "../Input"
import { SelectDirection } from "../SelectDirection"
import { SelectTransmission } from './../SelectTransmission/index';
import { CheckBoxAddInfo } from './../CheckBoxAddInfo/index';
import { Button } from './../Button/index';


export const RegisterCarStep2 = (props) => {
    return (
        <>
            <SelectDirection />
            <CheckBoxAddInfo />
            <SelectTransmission />
            
            <Input label="Quilometragem" name="quilometragem" placeholder="Digite somente números" type='number' />

            <Button secondary={true} stepButton={true} onClick={props.prev}>Voltar etapa</Button>
            <Button stepButton={true} onClick={props.next}>Última etapa</Button>
        </>
    )
}