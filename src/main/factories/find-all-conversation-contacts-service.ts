import { FindAllConversationOfContactService } from '../../data/service/find-all-conversation-of-contacts'
import { ContactGateway } from '../../infra/gateways/contact'
import { AxiosAdapter } from '../adapters/axios'

export const makeFindAllConversationContactsService = () => {
  const httpClient = new AxiosAdapter()
  const findAllConversationContactsGateway = new ContactGateway(httpClient)
  const findAllConversationOfContactService =
    new FindAllConversationOfContactService(findAllConversationContactsGateway)

  return findAllConversationOfContactService
}
