export interface AuthenticateUseCase {
  execute(apiKey: string): Promise<boolean>
}
