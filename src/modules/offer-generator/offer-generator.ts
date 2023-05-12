import { getRandomItem, getRandomDate, getRandomItems, getRandomFlag, getRandomInt } from '../../core/helpers/index.js';
import { MockOffer } from '../../types/mock.type';
import { OfferGeneratorInterface } from './offer-generator.interface';

export default class OfferGenerator implements OfferGeneratorInterface {

  constructor(private readonly mockOffers: MockOffer) {}

  public generate = (): string => {
    const MAX_OFFER_RATING = 5;
    const MIN_RANDOM_PRICE = 100;
    const MAX_RANDOM_PRICE = 30000;
    const MAX_ROOM_COUNT = 8;
    const MAX_GUEST_COUNT = 10;
    const MAX_USER_ID = 2000;
    const MAX_COMMENT_COUNT = 10;

    const placeName = getRandomItem<string>(this.mockOffers.names);
    const placeDescription = getRandomItem<string>(this.mockOffers.descriptions);
    const publishOfferDateTime = getRandomDate();
    const cityName = getRandomItem<string>(this.mockOffers.cities);
    const preview = getRandomItem<string>(this.mockOffers.photos);
    const offerPhotos = getRandomItems<string>(this.mockOffers.photos).join(';');
    const isPremiumOffer = getRandomFlag() ? 'Premium' : '';
    const rating = getRandomInt(0, MAX_OFFER_RATING);
    const housingType = getRandomItem(this.mockOffers.types);
    const roomCount = getRandomInt(1, MAX_ROOM_COUNT);
    const guestCount = getRandomInt(1, MAX_GUEST_COUNT);
    const price = getRandomInt(MIN_RANDOM_PRICE, MAX_RANDOM_PRICE);
    const facilities = getRandomItems<string>(this.mockOffers.facilities).join(';');
    const userId = getRandomInt(1, MAX_USER_ID);
    const commentCount = getRandomInt(0, MAX_COMMENT_COUNT);
    const coordinates = [
      getRandomItem<string>(this.mockOffers.coordinates[cityName].latitude),
      getRandomItem<string>(this.mockOffers.coordinates[cityName].longitude)
    ].join(';');

    return [
      placeName, placeDescription, publishOfferDateTime, cityName,
      preview, offerPhotos, isPremiumOffer, rating, housingType,
      roomCount, guestCount, price, facilities, userId, commentCount,
      coordinates
    ].join('\t');
  };

}
