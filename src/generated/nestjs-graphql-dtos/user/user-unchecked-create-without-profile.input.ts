import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskUncheckedCreateNestedManyWithoutAuthorInput } from '../task/task-unchecked-create-nested-many-without-author.input';
import { TaskUncheckedCreateNestedManyWithoutSharedWithInput } from '../task/task-unchecked-create-nested-many-without-shared-with.input';

@InputType()
export class UserUncheckedCreateWithoutProfileInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => String, { nullable: true })
  roles?: string;

  @Field(() => TaskUncheckedCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  tasks?: TaskUncheckedCreateNestedManyWithoutAuthorInput;

  @Field(() => TaskUncheckedCreateNestedManyWithoutSharedWithInput, {
    nullable: true,
  })
  sharedTasks?: TaskUncheckedCreateNestedManyWithoutSharedWithInput;
}
