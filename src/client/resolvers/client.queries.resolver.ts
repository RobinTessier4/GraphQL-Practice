import { ClientService } from './../client.service'
import { Client } from './../models/client.model'
import { Args, ID, Query, Resolver } from '@nestjs/graphql'

@Resolver(Client)
export class ClientQueriesResolver {
  constructor(private readonly clientService: ClientService) {}

  @Query(() => [Client])
  async getClients() {
    return this.clientService.getClients()
  }

  @Query(() => Client)
  async getClientById(@Args('id') id: string) {
    return this.clientService.getClientById(id)
  }
}
