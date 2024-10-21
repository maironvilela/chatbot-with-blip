import { HttpClient } from '@/data/protocols/adapters/http-client'
import { AuthenticatorGateway } from '@/data/protocols/gateways/authenticator'
import { BlipHttpHelpers } from '../helpers'

export class AuthenticateGatewayImp implements AuthenticatorGateway {
  constructor(private httpClient: HttpClient) {}
  async authenticate({ apiKey }: AuthenticatorGateway.Props): Promise<boolean> {
    const { body, headers, url } =
      BlipHttpHelpers.getBodyAndHeadersAuthenticate(apiKey)
    const response = await this.httpClient.auth({ body, headers, url })

    const isKayValid = response.status === 200

    return isKayValid
  }
}
