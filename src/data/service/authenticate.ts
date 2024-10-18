import { AuthenticateUseCase } from '../../domain/usecases/authenticate'
import { BlipHttpHelpers } from '../../infra/helpers/blip-http'
import { HttpClient } from '../protocols/adapters/http-client'

export class AuthenticateService implements AuthenticateUseCase {
  constructor(private httpClient: HttpClient) {}
  async execute(apiKey: string): Promise<boolean> {
    try {
      const url = import.meta.env.VITE_BLIP_API_URL //TODO: Verificar melhor local

      const { body, headers } =
        BlipHttpHelpers.getBodyAndHeadersAuthenticate(apiKey)

      const response = await this.httpClient.post({
        body,
        headers,
        url,
      })

      const isKayValid = response.status === 200

      return isKayValid
    } catch {
      return false
    }
  }
}
