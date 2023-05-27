import 'reflect-metadata';
import { Container } from 'inversify';
import RestApplication from './app/rest.js';
import { AppComponent } from './types/app-components.enum.js';
import { createRestApplicationContainer } from './app/rest.container.js';
import { createOfferContainer } from './modules/offer/offer.container.js';
import { createUserContainer } from './modules/user/user.container.js';

const bootstrap = async (): Promise<void> => {
  const restContainer = createRestApplicationContainer();
  const offerContainer = createOfferContainer();
  const userContainer = createUserContainer();

  const appContainer = Container.merge(
    restContainer,
    offerContainer,
    userContainer
  );

  const app = appContainer.get<RestApplication>(AppComponent.RestApplication);

  await app.init();

};

bootstrap();
