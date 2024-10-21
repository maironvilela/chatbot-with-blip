import { FindAllConversationOfContactService } from '@/data/service/find-all-conversation-of-contacts'
import { ContactGateway } from '@/infra/gateways/contact'
import { AxiosAdapter } from '../adapters/axios'

export const makeFindAllConversationContactsService = (apiKey: string) => {
  const httpClient = new AxiosAdapter()
  const findAllConversationContactsGateway = new ContactGateway(
    httpClient,
    apiKey
  )
  const findAllConversationOfContactService =
    new FindAllConversationOfContactService(findAllConversationContactsGateway)

  return findAllConversationOfContactService
}
