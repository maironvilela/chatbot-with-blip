import { describe, expect, it } from 'vitest'
import { HttpClient } from '../protocols/adapters/http-client'
import { AxiosAdapter } from '../../main/adapters/axios'
import { ListContactsService } from './list-contacts'
import { BlipHttpHelpers } from '../../infra/helpers/blip-http'

type SutType = {
  sut: ListContactsService
  httpClient: HttpClient
}

const makeSut = (): SutType => {
  const httpClient = new AxiosAdapter()
  const sut = new ListContactsService(httpClient)

  return { httpClient, sut }
}

describe('ListContactService', () => {
  it('Should be able list contacts', async () => {
    const { sut } = makeSut()
    const API_KEY = import.meta.env.VITE_BLIP_API_KEY
    const url = import.meta.env.VITE_BLIP_API_URL

    const { body, headers } =
      BlipHttpHelpers.getInformationGetContactsWithPagingEndPoint({
        apiKey: API_KEY,
        skip: 0,
        take: '1',
      })

    const { data } = await sut.execute({ body, headers, url })

    expect(data).toHaveProperty('contacts')
    expect(data).toHaveProperty('numberOfRecords')
  })

  it('Should be able return an exception if there is a failure to search the contact list', async () => {
    const { sut } = makeSut()
    const API_KEY = import.meta.env.VITE_BLIP_API_KEY
    const url = 'invalid-url'

    const { body, headers } =
      BlipHttpHelpers.getInformationGetContactsWithPagingEndPoint({
        apiKey: API_KEY,
        skip: 0,
        take: '1',
      })

    const promise = sut.execute({ body, headers, url })

    expect(promise).rejects.toThrowError('Invalid URL')
  })
})
