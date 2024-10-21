export interface HttpClient {
  post(data: HttpClient.Props): Promise<HttpClient.Response>
  auth(data: HttpClient.Props): Promise<HttpClient.Response>
}

export namespace HttpClient {
  export type Props = {
    url?: string
    body: any
    headers: any
  }
  export type Response = {
    status: number
    data: any
  }
}
