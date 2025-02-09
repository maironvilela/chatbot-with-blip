import axios from 'axios'

import { axiosHttpClient } from '../lib/axios'

import { HttpClient } from '@/data/protocols/adapters/http-client'

export class AxiosAdapter implements HttpClient {
  async auth({
    body,
    headers,
    url = '',
  }: HttpClient.Props): Promise<HttpClient.Response> {
    const response = await axios.post(url, body, {
      headers,
    })
    return response
  }
  async post({
    body,
    url = '',
    headers,
  }: HttpClient.Props): Promise<HttpClient.Response> {
    return await axiosHttpClient.post(url, body, { headers })
  }
}
