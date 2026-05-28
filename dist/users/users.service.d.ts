import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    createUser(nombre: string, email: string): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    updateUser(id: number, data: Partial<User>): Promise<User>;
    deleteUser(id: number): Promise<void>;
}
