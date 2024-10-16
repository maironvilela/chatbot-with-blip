
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

        if (!apiKey) {
            return
        }
        const { isAccessAllowed } = await auth(apiKey)

        if (isAccessAllowed) {
            navigate('/')
        }
    }
    return (

        <div className="w-full flex items-center justify-center">
            <div>
                <form onSubmit={handleSubmit} className="w-[1200px] flex flex-col items-center  gap-4" >

                    <TextField.Root className="w-[50%]" placeholder="Informe a apiKey" radius="small" name="apiKey" />
                    <Button variant="outline" loading={false} radius={"large"}>Acessar API </Button>

                </form >

            </div>

        </div>

    )
}