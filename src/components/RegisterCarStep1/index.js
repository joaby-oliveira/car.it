import { Input } from "../Input"
import { Select } from "../Select"


export const RegisterCarStep1 = () => {
    return (
        <>
            <Input label="Modelo" name="modelo" placeholder="Ex: Celta" />
            <Input label="Ano" name="ano" placeholder="Informe o ano do carro" />
            <Select />
            <Input label="Preço" name="preco" placeholder="" />
        </>
    )
}