import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientService } from './client.service';
import { Client } from './models/client.model';
import { ClientMutationsResolver } from './resolvers/client.mutations.resolver';

@Module({
	imports:[TypeOrmModule.forFeature([Client])],
  providers: [ClientService, ClientMutationsResolver]
})
export class ClientModule {}
