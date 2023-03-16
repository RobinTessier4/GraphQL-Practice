import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { Product } from './entities/product.entity'

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: Repository<Product>) {}

  async findOne(id: Product['id']): Promise<Product> {
    return this.productRepository.findOneBy({ id })
  }
}
