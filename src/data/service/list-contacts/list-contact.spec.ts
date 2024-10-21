import 'dotenv/config'
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
  const apiUrl = process.env.VITE_BLIP_API_KEY || ''
  const httpClient = new AxiosAdapter()
  const listContactGateway = new ContactGateway(httpClient, apiUrl)
  const sut = new ListContactsService(listContactGateway)

  return { httpClient, sut }
}

describe('ListContactService', () => {
  it('Should be able list contacts', async () => {
    const { sut } = makeSut()

    const page = 0
    const itemPerPage = 2

    const { data } = await sut.execute({ page, itemPerPage })

    expect(data).toHaveProperty('contacts')
    expect(data).toHaveProperty('numberOfRecords')
  })
})
