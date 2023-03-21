import { Query, Resolver } from '@nestjs/graphql'
import { Product } from './entities/product.entity'
import { ProductService } from './product.service'

@Resolver()
export class ProductResolver {
  // constructor(private readonly productService: ProductService) {}

  // @Query()
  // findOneProduct(id: Product['id']): Promise<Product> {
  //   return this.productService.findOne(id)
  // }
}
