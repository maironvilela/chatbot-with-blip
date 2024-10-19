export interface FindAllConversationContactsGateway {
  findAllConversationContacts(
    data: FindAllConversationContactsGateway.Props
  ): Promise<FindAllConversationContactsGateway.Response>
}

export namespace FindAllConversationContactsGateway {
  export type Props = {
    id: string
  }
  export type Response = any
}

// Variavel tipo any
