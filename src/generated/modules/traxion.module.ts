import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { AuthenticationModule } from './authentication.module';
import { GraphqlModule } from './graphql.module';

@Module({
  imports: [GraphqlModule, AuthenticationModule, DatabaseModule],
  exports: [GraphqlModule, AuthenticationModule, DatabaseModule],
})
export class TraxionModule {}
