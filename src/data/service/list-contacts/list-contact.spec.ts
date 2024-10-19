import { describe, expect, it } from 'vitest'
import { HttpClient } from '../../protocols/adapters/http-client'
import { AxiosAdapter } from '../../../main/adapters/axios'
import { ListContactsService } from '.'
import { ContactGateway } from '../../../infra/gateways/contact'

type SutType = {
  sut: ListContactsService
  httpClient: HttpClient
}

const makeSut = (): SutType => {
  const httpClient = new AxiosAdapter()
  const listContactGateway = new ContactGateway(httpClient)
  const sut = new ListContactsService(listContactGateway)

  return { httpClient, sut }
}

describe('ListContactService', () => {
  it('Should be able list contacts', async () => {
    const { sut } = makeSut()

    const skip = 0
    const take = 2

    const { data } = await sut.execute({ skip, take })

    expect(data).toHaveProperty('contacts')
    expect(data).toHaveProperty('numberOfRecords')
  })

  it('Should be able return an exception if there is a failure to search the contact list', async () => {
    const BAD_REQUEST = '404'
    const { sut } = makeSut()
    const url = 'invalid-url'
    const skip = 0
    const take = 2

    const promise = sut.execute({ skip, take, url })

    await expect(promise).rejects.toThrowError(BAD_REQUEST)
  })
})