import { ClientPaginationArgs } from './dto/client-pagination.dto'
import { ClientUpdateInput, ClientUpdateOutput } from './dto/client-update.dto'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ClientCreateInput, ClientCreateOutput } from './dto/client-create.dto'
import { Client } from './models/client.model'
import { Repository } from 'typeorm'
import { ClientDeleteOutput } from './dto/client-delete.dto'

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async createClient(input: ClientCreateInput): Promise<ClientCreateOutput> {
    const newClient = this.clientRepository.create(input)
    const client = await this.clientRepository.save(newClient)
    return { client }
  }

  async updateClientById(
    clientId: Client['id'],
    input: ClientUpdateInput,
  ): Promise<ClientUpdateOutput> {
    const client = await this.clientRepository.findOneOrFail({
      where: { id: clientId },
    })
    await this.clientRepository.update({ id: clientId }, input)
    return { client }
  }

  async deleteClientById(clientId: Client['id']): Promise<ClientDeleteOutput> {
    const client = await this.clientRepository.findOneOrFail({
      where: { id: clientId },
    })
    await client.remove()
    return { clientId }
  }

  async getClients(): Promise<Client[]> {
    return await this.clientRepository.find()
  }

  async getClientById(id: Client['id']): Promise<Client> {
    return await this.clientRepository.findOneOrFail({
      where: { id },
    })
  }
}
