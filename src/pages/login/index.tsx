
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, TextField } from "@radix-ui/themes";

import { AuthenticateContext } from "../../contexts/authenticate";


export function Login() {

    const navigate = useNavigate();

    const { auth, isUserAuthenticated } = useContext(AuthenticateContext);

    const [messagePlaceholder, setMessagePlaceholder] = useState("");
    const [isPageWithError, setIsPageWithError] = useState(false);


    const authenticateSchema = z.object({
        apiKey: z.string().min(1, "Campo Obrigatório")
            .regex(/^Key\s[a-zA-Z0-9:]+$/, "Chave Inválida")
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm<AuthenticateUserFormData>({
        resolver: zodResolver(authenticateSchema)
    })

    useEffect(() => {

        if (isUserAuthenticated()) {
            navigate('/')
        }
    })

    type AuthenticateUserFormData = z.infer<typeof authenticateSchema>
    const handleAuthenticate = async (data: AuthenticateUserFormData) => {
        const { apiKey } = data
        const isKeyValid = await auth(apiKey)

        if (isKeyValid) {
            navigate('/')
            return
        }

        if (!isKeyValid) {
            setMessagePlaceholder(" (Falha na autenticação)")
            setIsPageWithError(true)
            reset()
            return
        }
    }

    return (

        <div className="grid bg-gray-100 h-screen grid-cols-1 md:grid-cols-2 max-w-[1440px] m-auto" >

            <section className=" hidden md:flex flex-col   text-center  items-center justify-center  py-20 h-full bg-violet-600 ">
                <img src="/public/assets/images/login.png" alt="imagens de um robô setando utilizando um notebook" className="lg:w-96 xl:w-2/3" />
            </section >

            <section className="flex flex-col items-center justify-center h-full w-full px-16   ">


                <div className="flex items-center flex-col  ">
                    <img src="/public/assets/images/login.png" alt="imagens de um robô sentado utilizando um notebook"
                        className="h-20 -mb-4 md:hidden" />
                    <h2 className="text-3xl py-4 font-bold leading-3">ChatBot</h2>
                </div>

                <form onSubmit={handleSubmit(handleAuthenticate)} className=" flex flex-col w-full gap-2 mt-4" >

                    <TextField.Root className={`w-full truncate border outline-none  border-solid 
                                    ${isPageWithError ? "border-red-500" : "border-blue-500"}`}
                        color={`${isPageWithError ? "red" : "blue"}`}
                        variant="soft"
                        placeholder={`Informe a chave da API ${messagePlaceholder}`}
                        radius="large"
                        {...register("apiKey")}
                    />
                    <span className="text-red-400">{errors.apiKey?.message}</span>


                    {!errors.apiKey && (
                        <Button variant="outline" loading={false} radius={"large"}>Acessar API </Button>
                    )}
                    <span>
                    </span>
                </form >
            </section >
        </div >



    )
}