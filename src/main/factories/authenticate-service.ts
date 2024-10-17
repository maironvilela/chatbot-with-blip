import { AuthenticateService } from '../../data/service/authenticate'
import { AxiosAdapter } from '../adapters/axios'

export const makeAuthenticateService = (): AuthenticateService => {
  const httpClient = new AxiosAdapter()
  const authenticateService = new AuthenticateService(httpClient)

  return authenticateService
}
