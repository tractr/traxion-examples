import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTasksInput } from '../user/user-create-nested-one-without-tasks.input';

@InputType()
export class TaskCreateWithoutSharedWithInput {
  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => UserCreateNestedOneWithoutTasksInput, { nullable: false })
  author!: UserCreateNestedOneWithoutTasksInput;
}
