import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Task } from './tasks/task.entity';
import { Categoria } from './categorias/categoria.entity';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '2005',
            database: 'apicurso',
            entities: [User, Task, Categoria],
            synchronize: true,
        }),
        UsersModule,
        TasksModule,
        CategoriasModule,
    ],
})
export class AppModule { }