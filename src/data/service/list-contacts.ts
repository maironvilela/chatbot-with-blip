import { ListContactsPaginatorUseCase } from '../../domain/usecases/list-contacts'
import { ListContactGateway } from '../protocols/gateways/list-contacts'

export class ListContactsService implements ListContactsPaginatorUseCase {
  constructor(private listContactGateway: ListContactGateway) {}
  async execute({
    skip,
    take,
    url,
  }: ListContactsPaginatorUseCase.Props): Promise<ListContactsPaginatorUseCase.Response> {
    try {
      const data = await this.listContactGateway.getAllContactsPaginator({
        skip,
        take,
        url,
      })

      return data
    } catch (error: any) {
      console.log(error.message)
      throw new Error(error.message)
    }
  }
}
