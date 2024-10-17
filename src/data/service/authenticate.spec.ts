import { describe, expect, it } from 'vitest'
import { HttpClient } from '../protocols/adapters/http-client'
import { AuthenticateService } from './authenticate'
import { AxiosAdapter } from '../../main/adapters/axios'

type SutType = {
  sut: AuthenticateService
  httpClient: HttpClient
}

const makeSut = (): SutType => {
  const httpClient = new AxiosAdapter()
  const sut = new AuthenticateService(httpClient)

  return { httpClient, sut }
}

describe('AuthenticateService', () => {
  it('Should be able to authenticate', async () => {
    const { sut } = makeSut()
    const API_KEY = 'Key ZmVlZGJhY2tzaXRlOmJVT3lTQTNqTXhnUHRIelJWY1Jx'

    const response = await sut.execute(API_KEY)

    expect(response).toBe(true)
  })

  it('Should be able to authenticate', async () => {
    const { sut } = makeSut()
    const API_KEY_INVALID = 'any-key'

    const response = await sut.execute(API_KEY_INVALID)

    expect(response).toBe(false)
  })
})

//TODO: Validar se chave é valida (expressao regular)
