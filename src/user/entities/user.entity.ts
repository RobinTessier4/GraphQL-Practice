import { Field, ObjectType } from '@nestjs/graphql'
import { Order } from '../../order/entities/order.entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field()
  id: string

  @Column()
  @Field()
  name: string

  @Column()
  @Field()
  email: string

  @OneToMany(() => Order, (order) => order.user)
  @Field()
  orders: Order[]
}
