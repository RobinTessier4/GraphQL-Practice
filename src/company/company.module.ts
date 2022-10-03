import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CompanyService } from './company.service'
import { Company } from './models/company.model'
import { CompanyMutationsResolver } from './resolvers/company.resolvers.mutations'

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  providers: [CompanyService, CompanyMutationsResolver],
})
export class CompanyModule {}
