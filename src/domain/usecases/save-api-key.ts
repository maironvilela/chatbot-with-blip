export interface SaveApiKeyUseCase {
  execute(apiKey: string): Promise<void>
}
