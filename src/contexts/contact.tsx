import { createContext } from 'react'
import { Contact } from '@/domain/models/contact'
import { makeListContactsService } from '@/main/factories/list-contacts-service'
import { makeFindAllConversationContactsService } from '../main/factories/find-all-conversation-contacts-service'


type ContactProps = {
    children: React.ReactNode
}

type getContactListProps = {
    page: number
    itemPerPage: number
}

type getContactListResponse = {
    data: {
        contacts: Contact[],
        numberOfRecords: number;
    }
}

type ContactContextTypes = {
    getContactList: (data: getContactListProps) => Promise<getContactListResponse>
    getMessagesContact: (id: string) => Promise<any>

}

export type Message = {
    id: string;
    direction: 'sent' | 'received';
    date: string;
    type: "text/plain" | "application/vnd.lime.media-link+json" | "application/vnd.lime.select+json"
    content: any;
}


export const ContactContext = createContext({} as ContactContextTypes)

export function ContactContextProvider({
    children,
}: ContactProps) {

    const getContactList = async ({ page, itemPerPage }: getContactListProps): Promise<getContactListResponse> => {

        const apiKey = localStorage.getItem("apiKey")

        if (!apiKey) { throw new Error("ApiKey não encontrado") }

        const listContactService = makeListContactsService(apiKey)
        const contacts = await listContactService.execute({
            page, itemPerPage
        })
        return contacts
    }

    const getMessagesContact = async (id: string) => {
        const apiKey = localStorage.getItem("apiKey")

        if (!apiKey) { throw new Error("ApiKey não encontrado") }
        const findAllConversationOfContactService = makeFindAllConversationContactsService(apiKey)
        const response = await findAllConversationOfContactService.findConversationOfContacts({ id });
        return response.data.resource.items;
    }



    return (
        <ContactContext.Provider value={{ getContactList, getMessagesContact }}>
            {children}
        </ContactContext.Provider>

    )
}
