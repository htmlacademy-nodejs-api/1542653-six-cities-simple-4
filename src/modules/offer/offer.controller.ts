import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import Controller from '../../core/controller/controller.abstract.js';
import OfferService from './offer.service.js';
import { LoggerInterface } from '../../core/logger/logger.interface';
import { AppComponent } from '../../types/app-components.enum.js';
import { HttpMethods } from '../../types/http-methods.enum.js';
import { fillDTO } from '../../core/helpers/index.js';
import OffersRDO from './rdo/offers.rdo.js';
//import RequestOfferDto from './dto/request-offer.dto.js';
import OfferRDO from './rdo/offer.rdo.js';
import CreateOfferDto from './dto/create-offer.dto.js';
//import UpdateOfferDTO from './dto/update-offer.dto.js';

@injectable()
export default class OfferController extends Controller {
  constructor(
    @inject(AppComponent.LoggerInterface) protected readonly logger: LoggerInterface,
    @inject(AppComponent.OfferServiceInterface) private readonly offerService: OfferService
  ) {
    super(logger);

    this.logger.info('Regiser routers for offer controller...');

    this.addRoute({path: '/', method: HttpMethods.Get, handler: this.index});
    this.addRoute({path: '/:id', method: HttpMethods.Get, handler: this.exactOffer });
    this.addRoute({path: '/', method: HttpMethods.Post, handler: this.createOffer });
    this.addRoute({path: '/:id', method: HttpMethods.Patch, handler: this.updateOffer });
    this.addRoute({path: '/:id', method: HttpMethods.Delete, handler: this.deleteOffer});
  }

  public index = async (_req: Request, res: Response): Promise<void> => {
    const offers = await this.offerService.find();
    const offersResponse = fillDTO(OffersRDO, offers);
    this.ok(res, offersResponse);
  };

  public exactOffer = async ({ params }: Request, res: Response) => {
    const offer = await this.offerService.findByOfferId(params.id);
    const offerResponse = fillDTO(OfferRDO, offer);
    this.ok(res, offerResponse);
  };

  public createOffer = async (
    { body }: Request<Record<string, unknown>, Record<string, unknown>, CreateOfferDto>,
    res: Response): Promise<void> => {
    const createdOffer = await this.offerService.create(body);
    this.created(res, createdOffer);
  };

  public updateOffer = async (
    req: Request,
    res: Response): Promise<void> => {
    const updatedOffer = await this.offerService.updateOffer(req.params.id, req.body);
    this.created(res, fillDTO(OfferRDO, updatedOffer));
  };

  public deleteOffer = async ({ params }: Request, res: Response): Promise<void> => {
    const deletedOffer = await this.offerService.deleteOffer(params.id);
    this.noContent(res, deletedOffer);
  };

}
