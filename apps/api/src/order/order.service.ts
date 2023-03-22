import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async getOrder(id: Order['id']): Promise<Order> {
    return this.orderRepository.findOneBy({ id });
  }

  async getOrders(): Promise<Order[]> {
    return this.orderRepository.find();
  }
}
