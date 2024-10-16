import { Contact } from '../models/contact'

export interface ListContactsUseCase {
  execute(): Promise<ListContacts.Response>
}

export namespace ListContacts {
  export type Response = Contact
}
