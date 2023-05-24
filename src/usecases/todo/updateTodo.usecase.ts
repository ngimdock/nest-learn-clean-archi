import { ILogger } from 'src/domain/logger';
import { ITodoRepository } from 'src/domain/repositories';

export class UpdateTodoUseCases {
  constructor(
    private readonly todoRepository: ITodoRepository,
    private readonly logger: ILogger,
  ) {}

  async execute(id: number, isDone: boolean): Promise<void> {
    await this.todoRepository.updateContent(id, isDone);

    this.logger.log(
      'updateTodoUseCases execute',
      `Todo ${id} have been updated`,
    );
  }
}
