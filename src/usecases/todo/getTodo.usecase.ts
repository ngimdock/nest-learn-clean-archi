import { TodoM } from 'src/domain/models';
import { ITodoRepository } from 'src/domain/repositories';

export class GetTodoUseCases {
  constructor(private readonly todoRepository: ITodoRepository) {}

  async execute(id: number): Promise<TodoM> {
    const todo = await this.todoRepository.findOneById(id);

    return todo;
  }
}
