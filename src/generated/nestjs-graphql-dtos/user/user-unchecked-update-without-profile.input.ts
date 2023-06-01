import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskUncheckedUpdateManyWithoutAuthorNestedInput } from '../task/task-unchecked-update-many-without-author-nested.input';
import { TaskUncheckedUpdateManyWithoutSharedWithNestedInput } from '../task/task-unchecked-update-many-without-shared-with-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutProfileInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => String, { nullable: true })
  roles?: string;

  @Field(() => TaskUncheckedUpdateManyWithoutAuthorNestedInput, {
    nullable: true,
  })
  tasks?: TaskUncheckedUpdateManyWithoutAuthorNestedInput;

  @Field(() => TaskUncheckedUpdateManyWithoutSharedWithNestedInput, {
    nullable: true,
  })
  sharedTasks?: TaskUncheckedUpdateManyWithoutSharedWithNestedInput;
}
