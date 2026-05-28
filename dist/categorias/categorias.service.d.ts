import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';
export declare class CategoriasService {
    private readonly categoriasRepository;
    constructor(categoriasRepository: Repository<Categoria>);
    create(nombre: string): Promise<Categoria>;
    findAll(): Promise<Categoria[]>;
    findById(id: number): Promise<Categoria>;
    update(id: number, data: Partial<Categoria>): Promise<Categoria>;
    delete(id: number): Promise<void>;
}
