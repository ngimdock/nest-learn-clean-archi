export class AddTodoDto {
  content: string;
}

export class UpdateTodoDto {
  id: number;
  content?: string;
  isDone?: boolean;
}
