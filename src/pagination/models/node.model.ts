import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm'
import { Field, ID, InterfaceType } from '@nestjs/graphql'

@InterfaceType()
export abstract class Node extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => Date)
  @CreateDateColumn()
  updatedAt: Date
}
