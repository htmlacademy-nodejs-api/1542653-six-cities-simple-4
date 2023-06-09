import { Container } from 'inversify';
import { AppComponent } from '../../types/app-components.enum.js';
import OfferService from './offer.service.js';
import { OfferServiceInterface } from './offer-service.interface';
import { types } from '@typegoose/typegoose';
import { OfferEntity, OfferModel } from './offer.entity.js';
import { ControllerInterface } from '../../core/controller/controller.interface.js';
import OfferController from './offer.controller.js';

export const createOfferContainer = (): Container => {
  const offerContainer = new Container();

  offerContainer.bind<OfferServiceInterface>(AppComponent.OfferServiceInterface).to(OfferService).inSingletonScope();
  offerContainer.bind<types.ModelType<OfferEntity>>(AppComponent.OfferModel).toConstantValue(OfferModel);
  offerContainer.bind<ControllerInterface>(AppComponent.OfferController).to(OfferController).inSingletonScope();

  return offerContainer;
};

