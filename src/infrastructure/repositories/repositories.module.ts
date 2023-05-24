import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { DatabaseTodoRepository } from './todo.repository';

@Module({
  imports: [],
  providers: [DatabaseTodoRepository],
})
export class RepositoriesModule {}
