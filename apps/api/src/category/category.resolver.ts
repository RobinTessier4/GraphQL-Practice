import { Args, ID, Query, Resolver } from '@nestjs/graphql';

import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';

@Resolver()
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => Category)
  getCategory(
    @Args('categoryId', { type: () => ID }) categoryId: Category['id'],
  ): Promise<Category> {
    return this.categoryService.getCategory(categoryId);
  }

  @Query(() => [Category])
  getCategories(): Promise<Category[]> {
    return this.categoryService.getCategories();
  }
}
