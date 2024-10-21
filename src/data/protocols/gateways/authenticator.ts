export interface AuthenticatorGateway {
  authenticate(data: AuthenticatorGateway.Props): Promise<boolean>
}

export namespace AuthenticatorGateway {
  export type Props = { apiKey: string; url?: string }
}
