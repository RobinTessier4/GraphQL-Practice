import { Mutation, Resolver, Args } from '@nestjs/graphql'
import { CompanyService } from '../company.service'
import {
  CompanyCreateInput,
  CompanyCreateOutput,
} from '../dto/company-create.dto'
import { Company } from '../models/company.model'

@Resolver(Company)
export class CompanyMutationsResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Mutation(() => CompanyCreateOutput)
  async companyCreate(@Args('input') input: CompanyCreateInput) {
    return this.companyService.createCompany(input)
  }
}
