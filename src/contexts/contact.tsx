import { createContext } from 'react'
import { Contact } from '../domain/models/contact'
import { BlipHttpHelpers } from '../infra/helpers/blip-http'
import { makeListContactsService } from '../main/factories/list-contacts-service'

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
}

export const ContactContext = createContext({} as ContactContextTypes)

export function ContactContextProvider({
    children,
}: ContactProps) {

    const getContactList = async ({ skip, take }: getContactListProps): Promise<getContactListResponse> => {
        const url = import.meta.env.VITE_BLIP_API_URL
        const apiKey = import.meta.env.VITE_BLIP_API_KEY

        const listContactService = makeListContactsService()

        const { body, headers } = BlipHttpHelpers.getInformationGetContactsWithPagingEndPoint({
            apiKey,
            skip,
            take
        })
        const contacts = await listContactService.execute({
            url,
            body,
            headers
        })




        return contacts
    }

    return (
        <ContactContext.Provider value={{ getContactList }}>
            {children}
        </ContactContext.Provider>

    )
}
