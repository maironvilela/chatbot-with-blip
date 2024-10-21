
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthenticateContext } from "../../contexts/authenticate";
import { Message, useContact } from "../../hooks/use-contact";
import { Header } from "../../components/header";
import { UseDate } from "./hooks/use-data";
import { MessageOptions } from "./components/message-options";
import { MessageText } from "./components/message.-text";
import { MessageImage } from "./components/message-image";


export function Contact() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { getMessagesContact } = useContact()
    const { isUserAuthenticated } = useContext(AuthenticateContext);
    const { getRelativeDate } = UseDate()

    const [messages, setMessages] = useState<Message[]>([])


    const contentFormat = {
        TEXT: 'text/plain',
        OPTIONS: 'application/vnd.lime.select+json',
        IMAGES: 'application/vnd.lime.media-link+json'
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
        <div className="flex gap-2 flex-col ">
            <Header />
            <div className="flex justify-center py-6">
                <div className="flex flex-col gap-12 w-[800px]">
                    {messages.map((message) => {
                        const { dateRelativeToNow, dateFormatted } = getRelativeDate(new Date(message.date));

                        switch (message.type) {
                            case contentFormat.TEXT:
                                return (
                                    <MessageText key={message.id} content={message.content} messageDateText={message.date} direction={message.direction} formattedDate={dateFormatted} relativeDate={dateRelativeToNow} />
                                )

                            case contentFormat.OPTIONS:
                                return (
                                    <MessageOptions key={message.id} content={message.content} messageDateText={message.date} direction={message.direction} formattedDate={dateFormatted} relativeDate={dateRelativeToNow} />
                                )
                            case contentFormat.IMAGES:
                                return (
                                    <MessageImage key={message.id} content={message.content} messageDateText={message.date} direction={message.direction} formattedDate={dateFormatted} relativeDate={dateRelativeToNow} />
                                )


                        }
                    })}

                </div>
            </div>
        </div>

    )
}

