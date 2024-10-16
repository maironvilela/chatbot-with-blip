import axios from 'axios'
import { AuthenticateGateway } from '../../data/protocols/gateways/authenticate'
import { BlipHttpHelpers } from '../helpers/blip-http'

export class AuthenticateAxiosAdapter implements AuthenticateGateway {
  async authenticate({
    apiKey,
    url,
  }: AuthenticateGateway.Props): Promise<AuthenticateGateway.Response> {
    const { body, headers } =
      BlipHttpHelpers.getInformationEndPointAuthenticate(apiKey)

    const { status } = await axios.post(url, body, {
      headers,
    })

    return { status }
  }
}
