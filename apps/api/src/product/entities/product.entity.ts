import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn()
  @Field()
  id: string

  @Column()
  @Field()
  name: string

  @Column()
  @Field()
  description: string

  @Column()
  @Field()
  price: number

  @Column()
  @Field()
  category: string

  @Column()
  @Field()
  image: string
}
