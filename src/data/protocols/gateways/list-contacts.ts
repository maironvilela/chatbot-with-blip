import { Contact } from '../../../domain/models/contact'

export interface ListContactGateway {
  getAllContactsPaginator(
    data: ListContactGateway.Props
  ): Promise<ListContactGateway.Response>
}

export namespace ListContactGateway {
  export type Props = {
    page: number
    itemPerPage: number
    url?: string
  }
  export type Response = {
    data: {
      contacts: Contact[]
      numberOfRecords: number
    }
  }
}
