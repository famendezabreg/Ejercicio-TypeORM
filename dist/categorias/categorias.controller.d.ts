import { CategoriasService } from './categorias.service';
import { Categoria } from './categoria.entity';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    create(body: {
        nombre: string;
    }): Promise<Categoria>;
    findAll(): Promise<Categoria[]>;
    findById(id: string): Promise<Categoria>;
    update(id: string, body: Partial<Categoria>): Promise<Categoria>;
    delete(id: string): Promise<void>;
}
