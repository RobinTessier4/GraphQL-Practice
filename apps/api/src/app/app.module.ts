import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AppResolver } from './app.resolver'
import { ProductModule } from '../product/product.module'
import { CategoryModule } from '../category/category.module'
import { UserModule } from '../user/user.module'
import { OrderModule } from '../order/order.module'
import { CompanyModule } from '../company/company.module'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      cache: 'bounded',
      autoSchemaFile: 'schema.gql',
      playground: false,
      sortSchema: true,
      debug: true,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: parseInt(configService.get('DATABASE_PORT')),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_DB'),
        entities: [join(__dirname, '**', '*.model.{ts,js}')],
        synchronize: true,
      }),
    }),
    ProductModule,
    CategoryModule,
    UserModule,
    OrderModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
