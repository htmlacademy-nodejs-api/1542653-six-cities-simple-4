import { injectable, inject } from 'inversify';
import { DocumentType, types } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.js';
import CreateOfferDto from './dto/create-offer.dto';
import { OfferServiceInterface } from './offer-service.interface';
import { AppComponent } from '../../types/app-components.enum.js';
import { LoggerInterface } from '../../core/logger/logger.interface.js';

@injectable()
export default class OfferService implements OfferServiceInterface {

  constructor(
        @inject(AppComponent.LoggerInterface) private readonly logger: LoggerInterface,
        @inject(AppComponent.OfferModel) private readonly offerModel: types.ModelType<OfferEntity>
  ) {}

  public create = async (dto: CreateOfferDto): Promise<DocumentType<OfferEntity>> => {
    const createdOffer = await this.offerModel.create(dto);
    this.logger.info('New offer has been created in the database');

    return createdOffer;
  };

  public findByOfferId = async (
    offerId: string
  ): Promise<DocumentType<OfferEntity> | null> => await this.offerModel.findById(offerId).exec();

}

