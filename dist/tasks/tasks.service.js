"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./task.entity");
const user_entity_1 = require("../users/user.entity");
const categoria_entity_1 = require("../categorias/categoria.entity");
let TasksService = class TasksService {
    tasksRepository;
    usersRepository;
    categoriasRepository;
    constructor(tasksRepository, usersRepository, categoriasRepository) {
        this.tasksRepository = tasksRepository;
        this.usersRepository = usersRepository;
        this.categoriasRepository = categoriasRepository;
    }
    async createTask(titulo, descripcion, userId, categoriaId) {
        const user = await this.usersRepository.findOne({ where: { id: userId } });
        if (!user)
            throw new common_1.NotFoundException(`Usuario con ID ${userId} no encontrado`);
        const categoria = await this.categoriasRepository.findOne({ where: { id: categoriaId } });
        if (!categoria)
            throw new common_1.NotFoundException(`Categoría con ID ${categoriaId} no encontrada`);
        const nueva = this.tasksRepository.create({ titulo, descripcion, user, categoria });
        return this.tasksRepository.save(nueva);
    }
    async findAll() {
        return this.tasksRepository.find({ relations: { user: true, categoria: true } });
    }
    async findById(id) {
        const task = await this.tasksRepository.findOne({
            where: { id },
            relations: { user: true, categoria: true },
        });
        if (!task)
            throw new common_1.NotFoundException(`Tarea con ID ${id} no encontrada`);
        return task;
    }
    async updateTask(id, data) {
        const task = await this.findById(id);
        Object.assign(task, data);
        return this.tasksRepository.save(task);
    }
    async deleteTask(id) {
        const result = await this.tasksRepository.delete(id);
        if (result.affected === 0)
            throw new common_1.NotFoundException(`Tarea con ID ${id} no encontrada`);
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(categoria_entity_1.Categoria)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], TasksService);
//# sourceMappingURL=tasks.service.js.map