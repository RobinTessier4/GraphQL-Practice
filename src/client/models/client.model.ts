import { Field, ObjectType, ID } from '@nestjs/graphql'
import { Node } from 'src/pagination/models/node.model'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Client extends Node {
  @Field(() => String)
  @Column()
  lastName: string

  @Field(() => String)
  @Column()
  firstName: string

  @Field(() => String)
  @Column()
  mail: string

  @Field(() => String)
  @Column()
  phone: string
}
