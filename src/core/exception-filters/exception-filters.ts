import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { injectable, inject } from 'inversify';
import { AppComponent } from '../../types/app-components.enum.js';
import { LoggerInterface } from '../logger/logger.interface';
import { ExceptionFiltersInterface } from './exception-filters.interface';
import HTTPError from '../errors/http-error.js';
import { createErrorData } from '../helpers/common.js';

@injectable()
export default class ExceptionFilters implements ExceptionFiltersInterface {
  constructor (
    @inject(AppComponent.LoggerInterface) private readonly logger: LoggerInterface
  ) {
    this.logger.info('Register exception filters');
  }

  private handleHttpError = (error: HTTPError, _req: Request, res: Response): void => {
    this.logger.error(`[${error.detail}]: ${error.httpStatusCode} - ${error.message}`);
    res
      .status(error.httpStatusCode)
      .json(createErrorData(error.message));
  };

  private handleOtherError = (error: Error | HTTPError, _req: Request, res: Response, _next: NextFunction): void => {
    this.logger.error(error.message);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(createErrorData(error.message));
  };

  public catch = (error: Error | HTTPError, req: Request, res: Response, next: NextFunction): void => {
    if (error instanceof HTTPError) {
      return this.handleHttpError(error, req, res);
    }

    this.handleOtherError(error, req, res, next);

  };

}
