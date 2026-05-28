import { UsersService } from './users.service';
import { User } from './user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(body: {
        nombre: string;
        email: string;
    }): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User>;
    update(id: string, body: Partial<User>): Promise<User>;
    delete(id: string): Promise<void>;
}
