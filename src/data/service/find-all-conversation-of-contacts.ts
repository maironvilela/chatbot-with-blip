import axios from 'axios'
import { FindAllConversationOfContactsUseCase } from '../../domain/usecases/find-all-conversation-of-contacts'

export class FindAllConversationOfContactService
  implements FindAllConversationOfContactsUseCase
{
  async findConversationOfContacts({
    id,
  }: FindAllConversationOfContactsUseCase.Props): Promise<FindAllConversationOfContactsUseCase.Response> {
    const url = import.meta.env.VITE_BLIP_API_URL
    const apiKey = import.meta.env.VITE_BLIP_API_KEY

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `${apiKey}`,
    }
    const body = {
      id: '{{$guid}}',
      method: 'get',
      uri: `/threads/${id}?refreshExpiredMedia=true`,
    }
    const response = await axios.post(url, body, {
      headers,
    })

    return response
  }
}
