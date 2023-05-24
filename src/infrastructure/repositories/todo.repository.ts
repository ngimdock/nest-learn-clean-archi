import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoM } from 'src/domain/models';
import { Todo } from '../entities';
import { Repository } from 'typeorm';
import { ITodoRepository } from 'src/domain/repositories';

@Injectable()
export class DatabaseTodoRepository implements ITodoRepository {
  // constructor(
  //   @InjectRepository(Todo)
  //   private readonly todoEntityRepository: Repository<Todo>,
  // ) {}

  insert(todo: TodoM): Promise<TodoM> {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<TodoM[]> {
    throw new Error('Method not implemented.');
  }

  findOneById(id: number): Promise<TodoM> {
    throw new Error('Method not implemented.');
  }

  updateContent(id: number, isDone: boolean): Promise<void> {
    throw new Error('Method not implemented.');
  }

  deleteOneById(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
