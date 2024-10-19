export interface FindAllConversationOfContactsUseCase {
  findConversationOfContacts(
    data: FindAllConversationOfContactsUseCase.Props
  ): Promise<FindAllConversationOfContactsUseCase.Response>
}

export namespace FindAllConversationOfContactsUseCase {
  export type Props = {
    id: string
  }
  export type Response = any
}
