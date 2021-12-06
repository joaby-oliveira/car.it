import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { useForm } from "../../Hooks/useForm";
import { Input } from "../Input"
import { Button } from './../Button/index';
import { SelectFuel } from './../SelectFuel/index';

export const RegisterCarStep3 = (props) => {
    const doors = useForm('')
    const { registerCarStep } = useContext(GlobalContext)

    registerCarStep.doors.setDoors(doors.value)
    console.log(registerCarStep)

    return (
        <>
            <Input {...doors} label="Portas" name="portas" placeholder="Número de portas" type='number' />

            <SelectFuel />

            <Button secondary={true} stepButton={true} onClick={props.prev}>Voltar etapa</Button>
            <Button stepButton={true} onClick={props.next}>Finalizar</Button>
        </>
    )
}