import { Contact } from '../models/contact'

export interface ListContactsPaginatorUseCase {
  execute(
    data: ListContactsPaginatorUseCase.Props
  ): Promise<ListContactsPaginatorUseCase.Response>
}

export namespace ListContactsPaginatorUseCase {
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
