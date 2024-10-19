import { createContext } from 'react'
import { Contact } from '../domain/models/contact'
import { makeListContactsService } from '../main/factories/list-contacts-service'
import { FindAllConversationOfContactService } from '../data/service/find-all-conversation-of-contacts'

type ContactProps = {
    children: React.ReactNode
}

type getContactListProps = {
    skip: number
    take: number
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

    const getContactList = async ({ skip, take }: getContactListProps): Promise<getContactListResponse> => {
        const listContactService = makeListContactsService()
        const contacts = await listContactService.execute({
            skip, take
        })
        return contacts
    }

    const getMessagesContact = async (id: string) => {
        const find = new FindAllConversationOfContactService();
        const response = await find.findConversationOfContacts({ id });
        return response.data.resource.items;

    }

    return (
        <ContactContext.Provider value={{ getContactList, getMessagesContact }}>
            {children}
        </ContactContext.Provider>

    )
}
