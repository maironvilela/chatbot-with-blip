import { HttpClient } from '../../data/protocols/adapters/http-client'
import { ListContactGateway } from '../../data/protocols/gateways/list-contacts'
import { BlipHttpHelpers } from '../helpers/blip-http'

export class ContactGateway implements ListContactGateway {
  constructor(private httpClient: HttpClient) {}
  async getAllContactsPaginator({
    skip,
    take,
    url,
  }: ListContactGateway.Props): Promise<ListContactGateway.Response> {
    const { body } =
      BlipHttpHelpers.getInformationGetContactsWithPagingEndPoint({
        skip,
        take,
      })
    const response = await this.httpClient.post({ body, url })

    const data = {
      contacts: response.data.resource.items,
      numberOfRecords: response.data.resource.total,
    }

    return { data }
  }
}
