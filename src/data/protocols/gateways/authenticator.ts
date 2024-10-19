export interface AuthenticatorGateway {
  authenticate(data: AuthenticateGateway.Props): Promise<boolean>
}

export namespace AuthenticateGateway {
  export type Props = { apiKey: string; url?: string }
}
