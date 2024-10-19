import { ListContactsService } from '../../data/service/list-contacts'
import { ContactGateway } from '../../infra/gateways/contact'
import { AxiosAdapter } from '../adapters/axios'

export const makeListContactsService = (
  apiKey: string
): ListContactsService => {
  const httpClient = new AxiosAdapter()
  const listContactGateway = new ContactGateway(httpClient, apiKey)
  const listContactService = new ListContactsService(listContactGateway)

  return listContactService
}
