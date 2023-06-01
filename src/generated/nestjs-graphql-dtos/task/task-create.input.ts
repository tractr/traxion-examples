import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTasksInput } from '../user/user-create-nested-one-without-tasks.input';
import { UserCreateNestedManyWithoutSharedTasksInput } from '../user/user-create-nested-many-without-shared-tasks.input';

@InputType()
export class TaskCreateInput {
  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => UserCreateNestedOneWithoutTasksInput, { nullable: false })
  author!: UserCreateNestedOneWithoutTasksInput;

  @Field(() => UserCreateNestedManyWithoutSharedTasksInput, { nullable: true })
  sharedWith?: UserCreateNestedManyWithoutSharedTasksInput;
}
