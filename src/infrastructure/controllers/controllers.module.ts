import { Module } from '@nestjs/common';
import { UseCasesProxyModule } from 'src/infrastructure/usecases-proxy/usecases-proxy.module';
import { TodoController } from './todo/todo.controller';

@Module({
  imports: [UseCasesProxyModule.register()],
  controllers: [TodoController],
})
export class ControllersModules {}
