import { FindAllConversationOfContactsUseCase } from '../../domain/usecases/find-all-conversation-of-contacts'
import { FindAllConversationContactsGateway } from '../protocols/gateways/find-all-conversation-contacts'

export class FindAllConversationOfContactService
  implements FindAllConversationOfContactsUseCase
{
  constructor(
    private findAllConversationContactsGateway: FindAllConversationContactsGateway
  ) {}
  async findConversationOfContacts({
    id,
  }: FindAllConversationOfContactsUseCase.Props): Promise<FindAllConversationOfContactsUseCase.Response> {
    const conversations =
      await this.findAllConversationContactsGateway.findAllConversationContacts(
        {
          id,
        }
      )
    return conversations
  }
}
