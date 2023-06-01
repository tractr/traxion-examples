import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedUpdateManyWithoutSharedTasksNestedInput } from '../user/user-unchecked-update-many-without-shared-tasks-nested.input';

@InputType()
export class TaskUncheckedUpdateWithoutAuthorInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => UserUncheckedUpdateManyWithoutSharedTasksNestedInput, {
    nullable: true,
  })
  sharedWith?: UserUncheckedUpdateManyWithoutSharedTasksNestedInput;
}
