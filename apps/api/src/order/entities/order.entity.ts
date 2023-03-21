import { Product } from '../../product/entities/product.entity'
import { User } from '../../user/entities/user.entity'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinColumn,
} from 'typeorm'
import { Field } from '@nestjs/graphql'

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  @Field()
  id: string

  @Column()
  @Field()
  date: Date

  @Column()
  @Field()
  total: number

  @ManyToMany(() => Product)
  @JoinColumn()
  @Field()
  items: Product[]

  @ManyToOne(() => User, (user) => user.orders)
  @Field()
  user: User
}
