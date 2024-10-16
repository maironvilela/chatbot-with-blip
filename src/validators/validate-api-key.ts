export interface ValidateApiKey {
  execute(apiKey: string): Promise<boolean>
}
