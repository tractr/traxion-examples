import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';
import { TaskUncheckedCreateNestedManyWithoutSharedWithInput } from '../task/task-unchecked-create-nested-many-without-shared-with.input';

@InputType()
export class UserUncheckedCreateWithoutTasksInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => String, { nullable: true })
  roles?: string;

  @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {
    nullable: true,
  })
  profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;

  @Field(() => TaskUncheckedCreateNestedManyWithoutSharedWithInput, {
    nullable: true,
  })
  sharedTasks?: TaskUncheckedCreateNestedManyWithoutSharedWithInput;
}
