import { ListContactsPaginatorUseCase } from '../../../domain/usecases/list-contacts'
import { ListContactGateway } from '../../protocols/gateways/list-contacts'

export class ListContactsService implements ListContactsPaginatorUseCase {
  constructor(private listContactGateway: ListContactGateway) {}
  async execute({
    page,
    itemPerPage,
    url,
  }: ListContactsPaginatorUseCase.Props): Promise<ListContactsPaginatorUseCase.Response> {
    try {
      const data = await this.listContactGateway.getAllContactsPaginator({
        page,
        itemPerPage,
        url,
      })
      return data
    } catch (error: any) {
      throw new Error(error.status)
    }
  }
}
