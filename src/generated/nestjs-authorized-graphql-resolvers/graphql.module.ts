import { Module } from '@nestjs/common';
import { DateScalar } from '@trxn/nestjs-graphql';
import { UserResolver, ProfileResolver, TaskResolver } from './resolvers';
import { ConfigurableModuleClass } from './graphql.module-definition';

const providers = [DateScalar, UserResolver, ProfileResolver, TaskResolver];

@Module({ providers, exports: providers })
export class GraphqlModule extends ConfigurableModuleClass {}
