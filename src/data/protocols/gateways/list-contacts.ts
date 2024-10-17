import { Contact } from '../../../domain/models/contact'

export interface ListContactGateway {
  getAllContactsPaginator(
    data: ListContactGateway.Props
  ): Promise<ListContactGateway.Response>
}

export namespace ListContactGateway {
  export type Props = {
    apiKey: string
    skip: string
    take: string
    url: string
  }
  export type Response = {
    contacts: Contact[]
  }
}
