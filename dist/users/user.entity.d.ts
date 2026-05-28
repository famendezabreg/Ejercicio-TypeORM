import { Task } from '../tasks/task.entity';
export declare class User {
    id: number;
    nombre: string;
    email: string;
    tareas: Task[];
}
