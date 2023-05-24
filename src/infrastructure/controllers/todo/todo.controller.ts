import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsecaseProxy } from 'src/infrastructure/usecases-proxy/usecase-proxy';
import { UseCasesProxyModule } from 'src/infrastructure/usecases-proxy/usecases-proxy.module';
import {
  AddTodoUseCases,
  GetTodoUseCases,
  GetTodosUseCases,
} from 'src/usecases/todo';
import { TodoPresenter } from './todo.presenter';
import { AddTodoDto } from './dto';

@Controller('todos')
@ApiTags('todos')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(TodoPresenter)
export class TodoController {
  constructor(
    @Inject(UseCasesProxyModule.GET_TODO_USECASES_PROXY)
    private readonly getTodoUsecaseProxy: UsecaseProxy<GetTodoUseCases>,

    @Inject(UseCasesProxyModule.GET_TODOS_USECASES_PROXY)
    private readonly getTodosUsecaseProxy: UsecaseProxy<GetTodosUseCases>,

    @Inject(UseCasesProxyModule.POST_TODO_USECASES_PROXY)
    private readonly addTodosUsecaseProxy: UsecaseProxy<AddTodoUseCases>,
  ) {}

  @Get()
  async getTodos() {
    const todos = await this.getTodosUsecaseProxy.getInstance().execute();

    return todos.map((todo) => new TodoPresenter(todo));
  }

  @Get(':id')
  async getTodo(@Param('id', ParseIntPipe) todoId: number) {
    const todo = await this.getTodoUsecaseProxy.getInstance().execute(todoId);

    return new TodoPresenter(todo);
  }

  @Post()
  async addTodo(@Body() addTodoDto: AddTodoDto) {
    const { content } = addTodoDto;

    const todo = await this.addTodosUsecaseProxy.getInstance().execute(content);

    return new TodoPresenter(todo);
  }
}
