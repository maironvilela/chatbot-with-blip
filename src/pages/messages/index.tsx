
import { format, formatDistanceToNow } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ContactContext, Message } from "../../contexts/contact";
import { getDateUtcFormat } from "../../utils/date-utc-format";
import { ptBR } from "date-fns/locale";
import { AuthenticateContext } from "../../contexts/authenticate";
import { IconButton, Tooltip } from "@radix-ui/themes";
import { RxExit } from "react-icons/rx";


export function Contact() {
    const { isUserAuthenticated, logout } = useContext(AuthenticateContext);
    const navigate = useNavigate();



    const { id } = useParams();
    const [messages, setMessages] = useState<Message[]>([])

    const { getMessagesContact } = useContext(ContactContext)

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

    useEffect(() => {

        if (!isUserAuthenticated()) {
            navigate(`/login`)
        }

        if (!id) {
            return
        }

        const getData = async () => {
            const response = await getMessagesContact(id)
            setMessages(response)
        }

        getData()

    }, [getMessagesContact, id, isUserAuthenticated, navigate])

    return (
        <div className="flex gap-2 flex-col">
            <header className='flex py-2 px-8 items-center bg-violet-400 justify-between'>
                <div className="flex items-center">
                    <img src="/public/assets/images/login.png" className="rounded-full h-12 w-12" />
                    <h2 className="font-bold text-lg">ChatBot</h2>
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <img src="/public/assets/images/avatar-anonimo.jpg" className="rounded-full h-8 w-8" />
                        <span>Administrator</span>
                    </div>

                    <Tooltip content="Sair">
                        <IconButton radius="full" color="violet" onClick={() => handleLogout()}>
                            <RxExit />
                        </IconButton>
                    </Tooltip>
                </div>

            </header>
            <div className="flex justify-center">
                <div className="flex flex-col gap-12 w-[800px]">
                    {messages.map((m) => {

                        const dataHoraUtc = getDateUtcFormat(new Date(m.date));
                        const messageDateFormatted = format(
                            dataHoraUtc,
                            "dd 'de' LLLL 'às' HH:mm'h'",
                            {
                                locale: ptBR
                            }
                        );
                        const messageDateRelativeToNow = formatDistanceToNow(dataHoraUtc, {
                            locale: ptBR,
                            addSuffix: true
                        });

                        if (m.type === 'text/plain') {
                            return (
                                <div key={m.id} className={`flex flex-col gap-2 w-2/3 p-4 ${m.direction === 'sent' ? " bg-gray-100" : "bg-green-100 ml-auto"}`} >
                                    <div className="flex text-center justify-between ">
                                        <div className="flex gap-2 items-center text-left w-3/4">
                                            <img className="w-10 h-10 rounded-full" src={`/public/assets/images/${m.direction}.jpg`} alt="" />
                                            <span>{m.content}</span>
                                        </div>
                                        <time className="w-30 text-gray-400 flex items-end"
                                            title={messageDateFormatted}
                                            dateTime={new Date(m.date).toISOString()}
                                        >
                                            {messageDateRelativeToNow}
                                        </time>


                                    </div>
                                </div>
                            )
                        }

                        if (m.type === 'application/vnd.lime.select+json') {
                            return (
                                <div key={m.id} className={`flex flex-col gap-2 w-2/3  p-4 ${m.direction === 'sent' ? " bg-gray-100" : "bg-green-100 ml-auto"}`} >
                                    <div className="flex ">
                                        <img className="w-10 h-10 rounded-full" src={`/public/assets/images/${m.direction}.jpg`} alt="" />
                                        <div className="flex flex-col gap-1">
                                            <span>{m.content.text}</span>
                                            <ul>
                                                {m.content.options.map((option: { text: string }) => (
                                                    <li key={option.text[0]} className="text-gray-400">{option.text}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        return (
                            <div key={m.id} className={`flex flex-col gap-2 w-2/3 ${m.direction === 'sent' ? "" : "ml-auto"}`}  >

                                <div className="flex gap-2">
                                    <img className="w-10 h-10 rounded-full" src={`/public/assets/images/${m.direction}.jpg`} alt="" />
                                    <div>
                                        <img src={m.content.uri} />
                                        <span>{m.content.text}</span>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>

    )
}

