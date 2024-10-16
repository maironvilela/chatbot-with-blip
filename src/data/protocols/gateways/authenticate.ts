export interface AuthenticateGateway {
  authenticate(
    data: AuthenticateGateway.Props
  ): Promise<AuthenticateGateway.Response>
}

export namespace AuthenticateGateway {
  export type Props = { apiKey: string; url: string }
  export type Response = {
    status: number
  }
}
