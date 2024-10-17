import axios from 'axios'
import { HttpClient } from '../../data/protocols/adapters/http-client'

export class AxiosAdapter implements HttpClient {
  async post({
    body,
    headers,
    url,
  }: HttpClient.Props): Promise<HttpClient.Response> {
    return await axios.post(url, body, {
      headers,
    })
  }
}
