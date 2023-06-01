import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateManyWithoutSharedTasksNestedInput } from '../user/user-update-many-without-shared-tasks-nested.input';

@InputType()
export class TaskUpdateWithoutAuthorInput {
  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => UserUpdateManyWithoutSharedTasksNestedInput, { nullable: true })
  sharedWith?: UserUpdateManyWithoutSharedTasksNestedInput;
}
