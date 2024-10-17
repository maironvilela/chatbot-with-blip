/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { format, formatDate, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

type Message = {
    id: string;
    direction: 'sent' | 'received';
    date: string;
    type: "text/plain" | "application/vnd.lime.media-link+json"
    content: any;
}

export function Contact() {


    const { id } = useParams();
    const [messages, setMessagens] = useState<Message[]>([])

    useEffect(() => {

        const getData = async () => {
            const url = import.meta.env.VITE_BLIP_API_URL
            const apiKey = import.meta.env.VITE_BLIP_API_KEY

            const headers = {
                'Content-Type': 'application/json',
                Authorization: `${apiKey}`,
            }
            const body = {
                id: "{{$guid}}",
                method: "get",
                "uri": `/threads/${id}?refreshExpiredMedia=true`
            }
            const response = await axios.post<Message[]>(url, body, {
                headers,
            })
            setMessagens(response.data.resource.items)

            console.log(response.data.resource.items)
        }

        getData()

    }, [id])

    const dataString = '2024-10-17T00:06:01.130Z'

    const date = new Date(dataString)

    console.log(date)


    return (
        <div className="flex flex-col gap-12">
            {messages.map((m) => {
                const data = format(new Date(m.date), "dd/MM/yyyy - mm:ss ");
                if (m.type === 'text/plain') {
                    return (
                        <div key={m.id} className="flex flex-col gap-2">
                            <div> <strong>id: </strong>{m.id}</div>
                            <div> <strong>direction: </strong>{m.direction}</div>
                            <div>  <strong>Type: </strong>{m.type}</div>
                            <div>  <strong>date: </strong>{data}</div>
                            <div>  <strong>Content: </strong>{m.content}</div>
                        </div>
                    )
                }

                return (
                    <div key={m.id} className="flex flex-col gap-2">
                        <div> <strong>id: </strong>{m.id}</div>
                        <div> <strong>direction: </strong>{m.direction}</div>
                        <div>  <strong>Type: </strong>{m.type}</div>
                        <div>  <strong>date: </strong>{data}</div>
                        <div>  <img src={m.content.uri} /></div>
                    </div>

                )
            })}
        </div>
    )
}