import { Contact } from '../models/contact'

export interface ListContactsPaginatorUseCase {
  execute(
    data: ListContactsPaginatorUseCase.Props
  ): Promise<ListContactsPaginatorUseCase.Response>
}

export namespace ListContactsPaginatorUseCase {
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
