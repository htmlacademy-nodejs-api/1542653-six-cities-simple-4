import { OfferCoordinates } from '../../../types/offer.type';

export default class CreateOfferDto {
  public name!: string;
  public description!: string;
  public publishDate!: string;
  public city!: string;
  public prevImageUrl!: string;
  public photos!: string[];
  public isPremium!: boolean;
  public rating!: number;
  public housingType!: string;
  public roomCount!: number;
  public guestCount!: number;
  public price!: number;
  public facilities!: string[];
  public authorId!: string;
  public commentCount!: number;
  public coordinates!: OfferCoordinates;
}
