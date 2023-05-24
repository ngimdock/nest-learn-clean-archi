import { TodoM } from '../models';

export interface ITodoRepository {
  insert(todo: TodoM): Promise<TodoM>;
  findAll(): Promise<TodoM[]>;
  findOneById(id: number): Promise<TodoM>;
  updateContent(id: number, isDone: boolean): Promise<void>;
  deleteOneById(id: number): Promise<void>;
}
