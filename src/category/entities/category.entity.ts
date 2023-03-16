import { Field, ObjectType } from '@nestjs/graphql'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn()
  @Field()
  id: number

  @Column()
  @Field()
  name: string

  @Column()
  @Field()
  description: string
}
