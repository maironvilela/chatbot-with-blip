import axios from 'axios'
import { AuthenticateGateway } from '../../data/protocols/gateways/authenticate'
import { BlipHttpHelpers } from '../helpers/blip-http'

export class AuthenticateAxiosAdapter implements AuthenticateGateway {
  async authenticate({
    apiKey,
    url,
  }: AuthenticateGateway.Props): Promise<boolean> {
    const { body, headers } =
      BlipHttpHelpers.getInformationEndPointAuthenticate(apiKey)

    let isAccessAllowed = true

    await axios
      .post(url, body, {
        headers,
        validateStatus(status: number) {
          return status === 200
        },
      })
      .catch(() => {
        isAccessAllowed = false
      })

    return isAccessAllowed
  }
}
