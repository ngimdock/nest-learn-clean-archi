import { Module } from '@nestjs/common';
import { DatabaseTodoRepository } from './todo.repository';

@Module({
  imports: [],
  providers: [DatabaseTodoRepository],
})
export class RepositoriesModule {}
