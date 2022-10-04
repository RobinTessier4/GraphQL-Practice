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

  async clientCreate(input: ClientCreateInput): Promise<ClientCreateOutput> {
    const newClient = this.clientRepository.create(input)
    const client = await this.clientRepository.save(newClient)
    return { client }
  }

  async clientUpdate(
    clientId: Client['id'],
    input: ClientUpdateInput,
  ): Promise<ClientUpdateOutput> {
    const client = await this.clientRepository.findOneOrFail({
      where: { id: clientId },
    })
    client.firstName = input.firstName
    client.lastName = input.lastName
    client.phone = input.phone
    client.mail = input.mail
    await client.save()
    return { client }
  }

  async clientDelete(clientId: Client['id']): Promise<ClientDeleteOutput> {
    const client = await this.clientRepository.findOneOrFail({
      where: { id: clientId },
    })
    await client.remove()
    return { clientId }
  }

  async clientsList(): Promise<Client[]> {
    const clients = await this.clientRepository.find()
    return clients
  }

  async clientById(clientId: Client['id']) : Promise<Client> {
    const client = await this.clientRepository.findOneOrFail(
      where: { id: clientId },
    )
  }
}
