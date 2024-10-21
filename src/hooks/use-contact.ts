import { Contact } from '../domain/models/contact'
import { makeFindAllConversationContactsService } from '../main/factories/find-all-conversation-contacts-service'
import { makeListContactsService } from '../main/factories/list-contacts-service'

type getContactListProps = {
  page: number
  itemPerPage: number
}

type getContactListResponse = {
  data: {
    contacts: Contact[]
    numberOfRecords: number
  }
}

export type Message = {
  id: string
  direction: 'sent' | 'received'
  date: string
  type:
    | 'text/plain'
    | 'application/vnd.lime.media-link+json'
    | 'application/vnd.lime.select+json'
  content: any
}

export function useContact() {
  const getContactList = async ({
    page,
    itemPerPage,
  }: getContactListProps): Promise<getContactListResponse> => {
    const apiKey = localStorage.getItem('apiKey')

    if (!apiKey) {
      throw new Error('ApiKey não encontrado')
    }

    const listContactService = makeListContactsService(apiKey)
    const contacts = await listContactService.execute({
      page,
      itemPerPage,
    })
    return contacts
  }

  const getMessagesContact = async (id: string) => {
    const apiKey = localStorage.getItem('apiKey')

    if (!apiKey) {
      throw new Error('ApiKey não encontrado')
    }
    const findAllConversationOfContactService =
      makeFindAllConversationContactsService(apiKey)
    const response =
      await findAllConversationOfContactService.findConversationOfContacts({
        id,
      })
    return response.data.resource.items
  }

  return { getContactList, getMessagesContact }
}
