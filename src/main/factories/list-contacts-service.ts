import { ListContactsService } from '../../data/service/list-contacts'
import { ContactGateway } from '../../infra/gateways/contact'
import { AxiosAdapter } from '../adapters/axios'

export const makeListContactsService = (): ListContactsService => {
  const httpClient = new AxiosAdapter()
  const listContactGateway = new ContactGateway(httpClient)
  const listContactService = new ListContactsService(listContactGateway)

  return listContactService
}
