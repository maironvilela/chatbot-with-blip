import { ListContactsService } from '../../data/service/list-contacts'
import { AxiosAdapter } from '../adapters/axios'

export const makeListContactsService = (): ListContactsService => {
  const httpClient = new AxiosAdapter()
  const listContactService = new ListContactsService(httpClient)

  return listContactService
}
