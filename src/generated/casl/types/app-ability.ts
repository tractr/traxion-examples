import { PureAbility } from '@casl/ability';
import { PrismaQuery, Subjects } from '@casl/prisma';
import { User, Profile, Task } from '@prisma/client';
import { Action } from '@trxn/nestjs-casl';

export type ModelSubjects = {
  User: User;
  Profile: Profile;
  Task: Task;
};
export type AppSubjects = 'all' | Subjects<ModelSubjects>;

export type AppAbility = PureAbility<[Action, AppSubjects], PrismaQuery>;
