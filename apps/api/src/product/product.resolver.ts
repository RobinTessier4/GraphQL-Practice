import { Args, ID, Query, Resolver } from '@nestjs/graphql';

import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => Product)
  getProduct(@Args('productId', { type: () => ID }) productId: Product['id']): Promise<Product> {
    return this.productService.getProduct(productId);
  }

  @Query(() => [Product])
  getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }
}
