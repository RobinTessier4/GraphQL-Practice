import { Args, ID, Query, Resolver } from '@nestjs/graphql';

import { Order } from './entities/order.entity';
import { OrderService } from './order.service';

@Resolver()
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Query(() => Order)
  getOrder(@Args('orderId', { type: () => ID }) orderId: Order['id']): Promise<Order> {
    return this.orderService.getOrder(orderId);
  }

  @Query(() => [Order])
  getOrders(): Promise<Order[]> {
    return this.orderService.getOrders();
  }
}
