import { ILogger } from 'src/domain/logger';
import { TodoM } from 'src/domain/models';
import { ITodoRepository } from 'src/domain/repositories';

export class AddTodoUseCases {
  constructor(
    private readonly todoRepository: ITodoRepository,
    private readonly logger: ILogger,
  ) {}

  async execute(content: string): Promise<TodoM> {
    const todo = new TodoM();
    todo.content = content;
    todo.isDone = false;

    const createdTodo = await this.todoRepository.insert(todo);

    this.logger.log('addTodoUseCases execute', 'New todo have been inserted');

    return createdTodo;
  }
}
