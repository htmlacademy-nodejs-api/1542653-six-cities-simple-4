import { DocumentType } from '@typegoose/typegoose';
import CreateUserDTO from './dto/create-user.dto';
import { UserEntity } from './user.entity.js';

export interface UserServiceInterface {
    create: (dto: CreateUserDTO, salt: string) => Promise<DocumentType<UserEntity>>;
    findByEmail: (email: string) => Promise<DocumentType<UserEntity> | null>;
    findOrCreate: (dto: CreateUserDTO, salt: string) => Promise<DocumentType<UserEntity>>
}
