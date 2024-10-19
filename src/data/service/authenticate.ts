import { AuthenticateUseCase } from '../../domain/usecases/authenticate'
import { AuthenticatorGateway } from '../protocols/gateways/authenticator'

export class AuthenticateService implements AuthenticateUseCase {
  constructor(private authenticateGateway: AuthenticatorGateway) {}
  async execute(apiKey: string): Promise<boolean> {
    try {
      const isKayValid = await this.authenticateGateway.authenticate({ apiKey })
      return isKayValid
    } catch {
      return false
    }
  }
}
