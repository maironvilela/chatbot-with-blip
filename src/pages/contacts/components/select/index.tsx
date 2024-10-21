import { Select as SelectRadix } from "@radix-ui/themes";


type SelectProps = {
    itemPerPage: string
    setItemPerPage: (value: string) => void
}


export function Select({ itemPerPage, setItemPerPage }: SelectProps) {
    return (
        <SelectRadix.Root defaultValue={itemPerPage} onValueChange={setItemPerPage}>
            <SelectRadix.Trigger placeholder="Quantidade de registros" />
            <SelectRadix.Content >
                <SelectRadix.Group>
                    <SelectRadix.Label>Quantidade de items</SelectRadix.Label>
                    <SelectRadix.Item value="2">02 Registros</SelectRadix.Item>
                    <SelectRadix.Item value="4">04 Registros</SelectRadix.Item>
                    <SelectRadix.Item value="8">08 Registros</SelectRadix.Item>
                    <SelectRadix.Item value="12">12 Registros</SelectRadix.Item>
                    <SelectRadix.Item value="16">16 Registros</SelectRadix.Item>
                    <SelectRadix.Item value="20">20 Registros</SelectRadix.Item>
                </SelectRadix.Group>

            </SelectRadix.Content>
        </SelectRadix.Root >
    )
}