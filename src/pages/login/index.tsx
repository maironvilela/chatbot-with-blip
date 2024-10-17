
import { Button, TextField } from "@radix-ui/themes";
import { useContext } from "react";
import { AuthenticateContext } from "../../contexts/authenticate";
import { useNavigate } from "react-router";


export function Login() {

    const { auth } = useContext(AuthenticateContext);

    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        const apiKey = data.get('apiKey')?.toString()
        //TODO: Criar mensagem de alerta caso o apiKey não esteja preenchido
        if (!apiKey) {
            return
        }
        const isKeyValid = await auth(apiKey)

        if (isKeyValid) {
            navigate('/')
        }
    }
    return (

        <div className="grid grid-cols-2 bg-gray-100  h-screen">
            <div className="flex flex-col justify-between text-center  py-20 h-full bg-violet-600 ">

                <img className="skew-y-6 -scale-x-125	" src='./public/assets/images/bot.svg' />
                <h2 className=" text-gray-50 text-3xl">Toda pergunta tem uma resposta.</h2>

            </div>
            <div className="flex flex-col items-center justify-center h-full px-16">
                <h2 className="text-3xl py-4">ChatBot</h2>
                <form onSubmit={handleSubmit} className="w-[1200px] flex flex-col items-center  gap-4" >
                    <TextField.Root className="w-[50%]" placeholder="Informe a apiKey" radius="small" name="apiKey" />
                    <Button variant="outline" loading={false} radius={"large"}>Acessar API </Button>
                </form >
            </div>
        </div>

    )
}