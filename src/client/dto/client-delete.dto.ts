import { Client } from './../models/client.model'
import { Field, ObjectType, ID } from '@nestjs/graphql'

@ObjectType()
export class ClientDeleteOutput {
  @Field(() => ID)
  clientId: Client['id']
}
