import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateNestedManyWithoutAuthorInput } from '../task/task-create-nested-many-without-author.input';
import { TaskCreateNestedManyWithoutSharedWithInput } from '../task/task-create-nested-many-without-shared-with.input';

@InputType()
export class UserCreateWithoutProfileInput {
  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => String, { nullable: true })
  roles?: string;

  @Field(() => TaskCreateNestedManyWithoutAuthorInput, { nullable: true })
  tasks?: TaskCreateNestedManyWithoutAuthorInput;

  @Field(() => TaskCreateNestedManyWithoutSharedWithInput, { nullable: true })
  sharedTasks?: TaskCreateNestedManyWithoutSharedWithInput;
}
