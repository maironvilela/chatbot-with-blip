export interface AuthenticateUseCase {
  execute(apiKey: string): Promise<void>
}
