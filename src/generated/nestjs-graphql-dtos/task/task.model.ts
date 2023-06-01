import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { TaskCount } from './task-count.output';

@ObjectType()
export class Task {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  description!: string | null;

  @Field(() => String, { nullable: false, defaultValue: 'draft' })
  status!: string;

  @Field(() => Int, { nullable: false })
  authorId!: number;

  @Field(() => User, { nullable: false })
  author?: User;

  @Field(() => [User], { nullable: true })
  sharedWith?: Array<User>;

  @Field(() => TaskCount, { nullable: false })
  _count?: TaskCount;
}
