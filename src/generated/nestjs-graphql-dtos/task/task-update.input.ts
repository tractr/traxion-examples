import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutTasksNestedInput } from '../user/user-update-one-required-without-tasks-nested.input';
import { UserUpdateManyWithoutSharedTasksNestedInput } from '../user/user-update-many-without-shared-tasks-nested.input';

@InputType()
export class TaskUpdateInput {
  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => UserUpdateOneRequiredWithoutTasksNestedInput, { nullable: true })
  author?: UserUpdateOneRequiredWithoutTasksNestedInput;

  @Field(() => UserUpdateManyWithoutSharedTasksNestedInput, { nullable: true })
  sharedWith?: UserUpdateManyWithoutSharedTasksNestedInput;
}
