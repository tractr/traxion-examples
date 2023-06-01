import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutSharedTasksInput } from '../user/user-create-nested-many-without-shared-tasks.input';

@InputType()
export class TaskCreateWithoutAuthorInput {
  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => UserCreateNestedManyWithoutSharedTasksInput, { nullable: true })
  sharedWith?: UserCreateNestedManyWithoutSharedTasksInput;
}
