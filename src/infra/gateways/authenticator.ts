import { HttpClient } from '../../data/protocols/adapters/http-client'
import {
  AuthenticateGateway,
  AuthenticatorGateway,
} from '../../data/protocols/gateways/authenticator'
import { BlipHttpHelpers } from '../helpers/blip-http'

export class AuthenticateGatewayImp implements AuthenticatorGateway {
  constructor(private httpClient: HttpClient) {}
  async authenticate({ apiKey }: AuthenticateGateway.Props): Promise<boolean> {
    const { body, headers } =
      BlipHttpHelpers.getBodyAndHeadersAuthenticate(apiKey)
    const response = await this.httpClient.post({ body, headers })
    const isKayValid = response.status === 200

    return isKayValid
  }
}
