import { AuthenticateService } from '@/data/service/authenticate'
import { AuthenticateGatewayImp } from '@/infra/gateways/authenticator'
import { AxiosAdapter } from '../adapters/axios'

export const makeAuthenticateService = (): AuthenticateService => {
  const httpClient = new AxiosAdapter()
  const authenticateGateway = new AuthenticateGatewayImp(httpClient)
  const authenticateService = new AuthenticateService(authenticateGateway)

  return authenticateService
}
