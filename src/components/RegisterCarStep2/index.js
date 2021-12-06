import { Input } from "../Input"
import { SelectDirection } from "../SelectDirection"
import { SelectTransmission } from './../SelectTransmission/index';
// import { CheckBoxAddInfo } from './../CheckBoxAddInfo/index';
import { Button } from './../Button/index';
import { useForm } from "../../Hooks/useForm";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

export const RegisterCarStep2 = (props) => {

    const { registerCarStep } = useContext(GlobalContext)

    const mileage = useForm('mileage')
    const brand = useForm('brand')

    registerCarStep.mileage.setMileage(mileage.value)
    registerCarStep.brand.setBrand(brand.value)

    return (
        <>
            <SelectDirection />
            {/* <CheckBoxAddInfo /> */}
            <SelectTransmission />

            <Input {...mileage} label="Quilometragem" name="quilometragem" placeholder="Digite somente números" type='number' />
            <Input {...brand} label="Marca" name="brand" placeholder="Marca do carro" />

            <Button secondary={true} stepButton={true} onClick={props.prev}>Voltar etapa</Button>
            <Button stepButton={true} onClick={props.next}>Última etapa</Button>
        </>
    )
}