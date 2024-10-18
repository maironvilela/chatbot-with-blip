/* eslint-disable @typescript-eslint/no-explicit-any */
import { Contact } from '../models/contact'

export interface ListContactsPaginatorUseCase {
  execute(
    data: ListContactsPaginatorUseCase.Props
  ): Promise<ListContactsPaginatorUseCase.Response>
}

export namespace ListContactsPaginatorUseCase {
  export type Props = {
    url: string
    body: any
    headers: any
  }
  export type Response = {
    data: {
      contacts: Contact[]
      numberOfRecords: number
    }
  }
}
