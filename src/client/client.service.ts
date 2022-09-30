import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientCreateInput, ClientCreateOutput } from './dto/client-create.dto';
import { Client } from './models/client.model';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
	constructor(@InjectRepository(Client)
	private readonly clientRepository: Repository<Client>) { }

	async createClient(input: ClientCreateInput): Promise<ClientCreateOutput> {
		const newClient = this.clientRepository.create(input)
		const client = await this.clientRepository.save(newClient)
		return { client }
	}
}
