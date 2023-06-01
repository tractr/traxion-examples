import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';
import { Task } from '../task/task.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => String, { nullable: false, defaultValue: 'role' })
  roles!: string;

  @Field(() => Profile, { nullable: true })
  profile?: Profile | null;

  @Field(() => [Task], { nullable: true })
  tasks?: Array<Task>;

  @Field(() => [Task], { nullable: true })
  sharedTasks?: Array<Task>;

  @Field(() => UserCount, { nullable: false })
  _count?: UserCount;
}
