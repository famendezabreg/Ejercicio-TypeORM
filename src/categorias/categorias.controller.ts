import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { Categoria } from './categoria.entity';

@Controller('categorias')
export class CategoriasController {
    constructor(private readonly categoriasService: CategoriasService) { }

    @Post()
    create(@Body() body: { nombre: string }): Promise<Categoria> {
        return this.categoriasService.create(body.nombre);
    }

    @Get()
    findAll(): Promise<Categoria[]> {
        return this.categoriasService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string): Promise<Categoria> {
        return this.categoriasService.findById(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: Partial<Categoria>): Promise<Categoria> {
        return this.categoriasService.update(+id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<void> {
        return this.categoriasService.delete(+id);
    }
}