import { User } from '../users/user.entity';
import { Categoria } from '../categorias/categoria.entity';
export declare class Task {
    id: number;
    titulo: string;
    descripcion: string;
    completada: boolean;
    fechaCreacion: Date;
    user: User;
    categoria: Categoria;
}
