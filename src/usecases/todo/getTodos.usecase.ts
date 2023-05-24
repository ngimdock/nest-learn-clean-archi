import { TodoM } from 'src/domain/models';
import { ITodoRepository } from 'src/domain/repositories';

export class GetTodosUseCases {
  constructor(private readonly todoRepository: ITodoRepository) {}

  async execute(): Promise<TodoM[]> {
    const todos = await this.todoRepository.findAll();

    return todos;
  }
}
