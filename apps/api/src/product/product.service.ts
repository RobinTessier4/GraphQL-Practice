import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async getProduct(id: Product['id']): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }

  async getProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }
}