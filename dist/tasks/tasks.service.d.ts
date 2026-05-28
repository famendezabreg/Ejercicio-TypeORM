import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { User } from '../users/user.entity';
import { Categoria } from '../categorias/categoria.entity';
export declare class TasksService {
    private readonly tasksRepository;
    private readonly usersRepository;
    private readonly categoriasRepository;
    constructor(tasksRepository: Repository<Task>, usersRepository: Repository<User>, categoriasRepository: Repository<Categoria>);
    createTask(titulo: string, descripcion: string, userId: number, categoriaId: number): Promise<Task>;
    findAll(): Promise<Task[]>;
    findById(id: number): Promise<Task>;
    updateTask(id: number, data: Partial<Task>): Promise<Task>;
    deleteTask(id: number): Promise<void>;
}
