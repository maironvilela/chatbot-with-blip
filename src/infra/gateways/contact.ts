import { HttpClient } from '../../data/protocols/adapters/http-client'
import { FindAllConversationContactsGateway } from '../../data/protocols/gateways/find-all-conversation-contacts'
import { ListContactGateway } from '../../data/protocols/gateways/list-contacts'
import { BlipHttpHelpers } from '../helpers/blip-http'

export class ContactGateway
  implements ListContactGateway, FindAllConversationContactsGateway
{
  constructor(private httpClient: HttpClient, private apiKey: string) {}
  async findAllConversationContacts({
    id,
  }: FindAllConversationContactsGateway.Props): Promise<FindAllConversationContactsGateway.Response> {
    const { body, headers } =
      BlipHttpHelpers.getBodyFindAllConversationsEndPoint(id, this.apiKey)
    return this.httpClient.post({ body, headers })
  }
  async getAllContactsPaginator({
    skip,
    take,
    url,
  }: ListContactGateway.Props): Promise<ListContactGateway.Response> {
    const { body, headers } =
      BlipHttpHelpers.getInformationGetContactsWithPagingEndPoint({
        skip,
        take,
        apiKey: this.apiKey,
      })

    const response = await this.httpClient.post({ body, url, headers })

    const data = {
      contacts: response.data.resource.items,
      numberOfRecords: response.data.resource.total,
    }

    return { data }
  }
}
