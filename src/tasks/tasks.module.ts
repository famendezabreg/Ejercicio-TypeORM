import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './task.entity';
import { User } from '../users/user.entity';
import { Categoria } from '../categorias/categoria.entity';
import { UsersModule } from '../users/users.module';
import { CategoriasModule } from '../categorias/categorias.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Task, User, Categoria]),
        UsersModule,
        CategoriasModule,
    ],
    providers: [TasksService],
    controllers: [TasksController],
})
export class TasksModule { }