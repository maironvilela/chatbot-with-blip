import { ListContactsPaginatorUseCase } from '../../domain/usecases/list-contacts'
import { ListContactGateway } from '../protocols/gateways/list-contacts'

export class ListContactsService implements ListContactsPaginatorUseCase {
  constructor(private listContactsGateway: ListContactGateway) {}
  async execute({
    apiKey,
    skip,
    take,
    url,
  }: ListContactsPaginatorUseCase.Props): Promise<ListContactsPaginatorUseCase.Response> {
    const contacts = await this.listContactsGateway.getAllContactsPaginator({
      apiKey,
      skip,
      take,
      url,
    })
    return contacts
  }
}
