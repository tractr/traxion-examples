import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutSharedTasksInput } from '../user/user-unchecked-create-nested-many-without-shared-tasks.input';

@InputType()
export class TaskUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => Int, { nullable: false })
  authorId!: number;

  @Field(() => UserUncheckedCreateNestedManyWithoutSharedTasksInput, {
    nullable: true,
  })
  sharedWith?: UserUncheckedCreateNestedManyWithoutSharedTasksInput;
}
