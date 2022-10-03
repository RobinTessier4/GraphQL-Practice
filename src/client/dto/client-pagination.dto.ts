import {
  PaginationArgs,
  SortDirection,
  PaginationSortBy,
} from './../../pagination/dto/pagination.dto'
import { Client } from './../models/client.model'
import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql'
import { Pagination } from 'src/pagination/dto/pagination.dto'

@InputType()
export class ArticlesPaginationSortBy extends PaginationSortBy {
  @Field(() => SortDirection, { nullable: true })
  title?: SortDirection
}

@ArgsType()
export class ClientPaginationArgs extends PaginationArgs {}

@ObjectType()
export class ClientPagination extends Pagination {
  @Field(() => [Client])
  nodes: Client[]
}
