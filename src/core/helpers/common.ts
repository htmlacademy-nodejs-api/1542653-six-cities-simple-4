import { ClassConstructor, plainToInstance } from 'class-transformer';

export const fillDTO = <T, U>(dto: ClassConstructor<T>, plainObject: U) => plainToInstance(dto, plainObject, { excludeExtraneousValues: true });
