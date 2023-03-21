import { Field, InputType, ObjectType } from '@nestjs/graphql'
import { Company } from '../models/company.model'

@InputType()
export class CompanyCreateInput {
  @Field(() => String)
  name: string

  @Field(() => String)
  address: string

  @Field(() => String)
  phone: string
}

@ObjectType()
export class CompanyCreateOutput {
  @Field(() => Company)
  company: Company
}
