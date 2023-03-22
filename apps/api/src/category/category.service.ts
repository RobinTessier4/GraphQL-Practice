import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async getCategory(id: Category['id']): Promise<Category> {
    return this.categoryRepository.findOneBy({ id });
  }

  async getCategories(): Promise<Category[]> {
    return this.categoryRepository.find();
  }
}
