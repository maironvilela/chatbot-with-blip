import axios from 'axios'
import { ListContactGateway } from '../../data/protocols/gateways/list-contacts'
import { BlipHttpHelpers } from '../helpers/blip-http'
import { Contact } from '../../domain/models/contact'

export class ContactsAxiosAdapter implements ListContactGateway {
  async getAllContactsPaginator({
    apiKey,
    skip,
    take,
    url,
  }: ListContactGateway.Props): Promise<ListContactGateway.Response> {
    const { body, headers } =
      BlipHttpHelpers.getInformationGetContactsWithPagingEndPoint({
        apiKey,
        skip,
        take,
      })

    const response = await axios.post(url, body, {
      headers,
    })

    const contacts: Contact[] = response.data.resource.items

    return { contacts }
  }
}
