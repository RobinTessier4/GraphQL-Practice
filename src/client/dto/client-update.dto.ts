import { ClientCreateInput, ClientCreateOutput } from './client-create.dto'
import { InputType, ObjectType } from '@nestjs/graphql'

@InputType()
export class ClientUpdateInput extends ClientCreateInput {}

@ObjectType()
export class ClientUpdateOutput extends ClientCreateOutput {}
