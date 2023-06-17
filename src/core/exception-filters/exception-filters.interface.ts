import { Request, Response, NextFunction } from 'express';

export interface ExceptionFiltersInterface {
  catch: (error: Error, req: Request, res: Response, next: NextFunction) => void;
}
