
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthenticateContext } from "../../contexts/authenticate";
import { Message } from "../../hooks/use-contact";
import { Header } from "../../components/header";
import { UseDate } from "./hooks/use-data";
import { MessageOptions } from "./components/message-options";
import { MessageText } from "./components/message.-text";
import { MessageImage } from "./components/message-image";
import { ContactContext } from "../../contexts/contact";
import { Link } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import { BiMessage } from "react-icons/bi";
import { getAvatarUrl } from "../../utils/get-avatar-url";


export function Contact() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { getMessagesContact } = useContext(ContactContext)

    const { isUserAuthenticated } = useContext(AuthenticateContext);
    const { getRelativeDate } = UseDate()

    const [messages, setMessages] = useState<Message[]>([])


    const contentFormat = {
        TEXT: 'text/plain',
        OPTIONS: 'application/vnd.lime.select+json',
        IMAGES: 'application/vnd.lime.media-link+json'
    }

    const userAvatarURL = getAvatarUrl()



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
        <div className="flex gap-2 flex-col ">
            <Header />

            <div className="flex items-center   gap-1 p-4 text-gray-600 text-2xl">
                <BiMessage className="inline" />
                <span>Conversas</span>
            </div>

            <Link to={`/`} className="flex items-center gap-1 px-4">
                <GiReturnArrow />
                <strong>{"Voltar"}</strong>
            </Link>

            <div className="flex justify-center py-6">

                <div className="flex flex-col gap-12 w-[800px]">
                    {messages.map((message) => {
                        const { dateRelativeToNow, dateFormatted } = getRelativeDate(new Date(message.date));
                        const avatarUrl = message.direction === 'received' ? userAvatarURL : "/public/assets/images/sent.jpg"


                        switch (message.type) {
                            case contentFormat.TEXT:
                                return (
                                    <MessageText key={message.id} content={message.content} messageDateText={message.date} direction={message.direction} formattedDate={dateFormatted} relativeDate={dateRelativeToNow} avatarUrl={avatarUrl} />
                                )

                            case contentFormat.OPTIONS:
                                return (
                                    <MessageOptions key={message.id} content={message.content} messageDateText={message.date} direction={message.direction} formattedDate={dateFormatted} relativeDate={dateRelativeToNow} avatarUrl={avatarUrl} />
                                )
                            case contentFormat.IMAGES:
                                return (
                                    <MessageImage key={message.id} content={message.content} messageDateText={message.date} direction={message.direction} formattedDate={dateFormatted} relativeDate={dateRelativeToNow} avatarUrl={avatarUrl} />
                                )
                        }
                    })}

                </div>
            </div>
        </div >

    )
}

