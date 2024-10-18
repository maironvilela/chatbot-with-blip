/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListContactsPaginatorUseCase } from '../../domain/usecases/list-contacts'
import { HttpClient } from '../protocols/adapters/http-client'

export class ListContactsService implements ListContactsPaginatorUseCase {
  constructor(private httpClient: HttpClient) {}
  async execute({
    url,
    body,
    headers,
  }: ListContactsPaginatorUseCase.Props): Promise<ListContactsPaginatorUseCase.Response> {
    try {
      const response = await this.httpClient.post({
        body,
        headers,
        url,
      })

      //const contacts: Contact[] = response.data.resource.items
      const data = {
        contacts: response.data.resource.items,
        numberOfRecords: response.data.resource.total,
      }

      return { data }
    } catch (error: any) {
      console.log(error.message)
      throw new Error(error.message)
    }
  }
}
