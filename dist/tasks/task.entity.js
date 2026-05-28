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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const categoria_entity_1 = require("../categorias/categoria.entity");
let Task = class Task {
    id;
    titulo;
    descripcion;
    completada;
    fechaCreacion;
    user;
    categoria;
};
exports.Task = Task;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Task.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Task.prototype, "completada", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Task.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.tareas, { eager: true }),
    __metadata("design:type", user_entity_1.User)
], Task.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categoria_entity_1.Categoria, (categoria) => categoria.tareas, { eager: true }),
    __metadata("design:type", categoria_entity_1.Categoria)
], Task.prototype, "categoria", void 0);
exports.Task = Task = __decorate([
    (0, typeorm_1.Entity)()
], Task);
//# sourceMappingURL=task.entity.js.map