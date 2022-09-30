import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { ClientService } from "../client.service";
import { ClientCreateInput, ClientCreateOutput } from "../dto/client-create.dto";
import { Client } from "../models/client.model";

@Resolver(Client)
export class ClientMutationsResolver {
	constructor(
		private readonly clientService: ClientService
	) { }

	@Mutation(() => ClientCreateOutput)
	async clientCreate(
		@Args('input') input: ClientCreateInput
	) {
		return this.clientService.createClient(input)
	}
}