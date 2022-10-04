import { ClientDeleteOutput } from './../dto/client-delete.dto'
import { ID } from '@nestjs/graphql'
import {
  ClientUpdateOutput,
  ClientUpdateInput,
} from './../dto/client-update.dto'
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { ClientService } from '../client.service'
import { ClientCreateInput, ClientCreateOutput } from '../dto/client-create.dto'
import { Client } from '../models/client.model'

@Resolver(Client)
export class ClientMutationsResolver {
  constructor(private readonly clientService: ClientService) {}

  @Mutation(() => ClientCreateOutput)
  async clientCreate(@Args('input') input: ClientCreateInput) {
    return this.clientService.createClient(input)
  }

  @Mutation(() => ClientUpdateOutput)
  async clientUpdate(
    @Args({ name: 'clientId', type: () => ID }) clientId: Client['id'],
    @Args('input') input: ClientUpdateInput,
  ) {
    return this.clientService.updateClientById(clientId, input)
  }

  @Mutation(() => ClientDeleteOutput)
  async clientDelete(
    @Args({ name: 'clientId', type: () => ID }) clientId: Client['id'],
  ) {
    return this.clientService.deleteClientById(clientId)
  }
}
