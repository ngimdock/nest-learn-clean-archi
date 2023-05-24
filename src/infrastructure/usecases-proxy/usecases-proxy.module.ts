import { DynamicModule, Module } from '@nestjs/common';
import { LoggerModule } from '../logger/logger.module';
import { RepositoriesModule } from '../repositories/repositories.module';
import { ExceptionsModule } from '../exceptions/exceptions.module';
import { DatabaseTodoRepository } from '../repositories/todo.repository';
import { UsecaseProxy } from './usecase-proxy';
import { LoggerService } from '../logger/logger.service';
import {
  AddTodoUseCases,
  DeleteTodoUseCases,
  GetTodoUseCases,
  GetTodosUseCases,
  UpdateTodoUseCases,
} from 'src/usecases/todo';

@Module({
  imports: [LoggerModule, RepositoriesModule, ExceptionsModule],
})
export class UseCasesProxyModule {
  static POST_TODO_USECASES_PROXY = 'postTodoUsecasesProxy';
  static GET_TODO_USECASES_PROXY = 'getTodoUsecasesProxy';
  static GET_TODOS_USECASES_PROXY = 'getTodosUsecasesProxy';
  static DELETE_TODO_USECASES_PROXY = 'deleteTodoUsecasesProxy';
  static PUT_TODO_USECASES_PROXY = 'putTodoUsecasesProxy';

  static register(): DynamicModule {
    return {
      module: UseCasesProxyModule,
      providers: [
        {
          inject: [DatabaseTodoRepository, LoggerService],
          provide: UseCasesProxyModule.POST_TODO_USECASES_PROXY,
          useFactory: (
            todoRepository: DatabaseTodoRepository,
            logger: LoggerService,
          ) => new UsecaseProxy(new AddTodoUseCases(todoRepository, logger)),
        },

        {
          inject: [DatabaseTodoRepository],
          provide: UseCasesProxyModule.GET_TODO_USECASES_PROXY,
          useFactory: (todoRepository: DatabaseTodoRepository) =>
            new UsecaseProxy(new GetTodoUseCases(todoRepository)),
        },

        {
          inject: [DatabaseTodoRepository],
          provide: UseCasesProxyModule.GET_TODOS_USECASES_PROXY,
          useFactory: (todoRepository: DatabaseTodoRepository) =>
            new UsecaseProxy(new GetTodosUseCases(todoRepository)),
        },

        {
          inject: [DatabaseTodoRepository, LoggerService],
          provide: UseCasesProxyModule.PUT_TODO_USECASES_PROXY,
          useFactory: (
            todoRepository: DatabaseTodoRepository,
            logger: LoggerService,
          ) => new UsecaseProxy(new UpdateTodoUseCases(todoRepository, logger)),
        },

        {
          inject: [DatabaseTodoRepository, LoggerService],
          provide: UseCasesProxyModule.DELETE_TODO_USECASES_PROXY,
          useFactory: (
            todoRepository: DatabaseTodoRepository,
            logger: LoggerService,
          ) => new UsecaseProxy(new DeleteTodoUseCases(todoRepository, logger)),
        },
      ],
      exports: [UseCasesProxyModule.POST_TODO_USECASES_PROXY],
    };
  }
}
