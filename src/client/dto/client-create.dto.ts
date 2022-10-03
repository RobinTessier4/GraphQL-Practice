import { InputType, Field, ObjectType } from '@nestjs/graphql'
import { Client } from '../models/client.model'

@InputType()
export class ClientCreateInput {
  @Field(() => String)
  lastName: string

  @Field(() => String)
  firstName: string

  @Field(() => String)
  mail: string

  @Field(() => String)
  phone: string
}

@ObjectType()
export class ClientCreateOutput {
  @Field(() => Client)
  client: Client
}
