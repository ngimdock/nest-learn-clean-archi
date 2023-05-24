import { ApiProperty } from '@nestjs/swagger';
import { TodoM } from 'src/domain/models';

export class TodoPresenter {
  @ApiProperty()
  id: number;

  @ApiProperty()
  content: string;

  @ApiProperty()
  isDone: boolean;

  @ApiProperty()
  createdDate: Date;

  @ApiProperty()
  updatedDate: Date;

  constructor(todo: TodoM) {
    const { id, content, isDone, createdDate, updatedDate } = todo;

    this.id = id;
    this.content = content;
    this.isDone = isDone;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;
  }
}
