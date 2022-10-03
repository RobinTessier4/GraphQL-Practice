import { ClientPaginationArgs } from './../dto/client-pagination.dto';
import { ClientService } from './../client.service'
import { Client } from './../models/client.model'
import { Args, Query, Resolver } from '@nestjs/graphql'

@Resolver(Client)
export class ClientQueriesResolver {
  constructor(private readonly clientService: ClientService) {}

  @Query(() => [Client])
  async clientList(@Args() args: ClientPaginationArgs) {
    return this.clientService.clientsPagination(args)
  }
}
