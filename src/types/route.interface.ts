import { Request, Response, NextFunction } from 'express';
import { HttpMethods } from './http-methods.enum';

export interface RouteInterface {
  path: string
  method: HttpMethods,
  handler: (req: Request, res: Response, next: NextFunction) => void
}
