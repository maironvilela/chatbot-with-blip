/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HttpClient {
  post(data: HttpClient.Props): Promise<HttpClient.Response>
}

//TODO: Definir a tipagem e recebeer como generics
export namespace HttpClient {
  export type Props = {
    url: string
    body: any
    headers: any
  }
  export type Response = {
    status: number
    data: any
  }
}
