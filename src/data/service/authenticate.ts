import { AuthenticateUseCase } from '../../domain/usecases/authenticate'

export class AuthenticateService implements AuthenticateUseCase {
  execute(apiKey: string): Promise<void> {
    return new Promise((resolve) => {
      resolve()
    })
  }
}
