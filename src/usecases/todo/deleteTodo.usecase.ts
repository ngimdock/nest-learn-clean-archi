import { ILogger } from 'src/domain/logger';
import { ITodoRepository } from 'src/domain/repositories';

export class DeleteTodoUseCases {
  constructor(
    private readonly todoRepository: ITodoRepository,
    private readonly logger: ILogger,
  ) {}

  async execute(id: number): Promise<void> {
    await this.todoRepository.deleteOneById(id);

    this.logger.log(
      'deleteTodoUseCases execute',
      `Todo ${id} have been deleted`,
    );
  }
}
