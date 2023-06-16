import { types } from '@typegoose/typegoose';
import { Container } from 'inversify';
import { AppComponent } from '../../types/app-components.enum.js';
import UserService from './user.service.js';
import { UserServiceInterface } from './user-service.interface';
import { UserEntity, UserModel } from './user.entity.js';
import UserController from './user.controller.js';
import { ControllerInterface } from '../../core/controller/controller.interface';
export const createUserContainer = (): Container => {
  const userContainer = new Container();

  userContainer.bind<UserServiceInterface>(AppComponent.UserServiceInterface).to(UserService).inSingletonScope();
  userContainer.bind<types.ModelType<UserEntity>>(AppComponent.UserModel).toConstantValue(UserModel);
  userContainer.bind<ControllerInterface>(AppComponent.UserController).to(UserController).inSingletonScope();

  return userContainer;
};

