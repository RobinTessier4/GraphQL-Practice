import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Company } from './models/company.model'
import { Repository } from 'typeorm'
import {
  CompanyCreateInput,
  CompanyCreateOutput,
} from './dto/company-create.dto'

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async createCompany(input: CompanyCreateInput): Promise<CompanyCreateOutput> {
    const newCompany = this.companyRepository.create(input)
    const company = await this.companyRepository.save(newCompany)
    return { company }
  }
}
