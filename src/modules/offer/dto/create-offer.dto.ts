import { OfferCoordinates } from '../../../types/offer.type';
import { IsDateString, MinLength, MaxLength, isIn, IsEnum } from 'class-validator';
import { OfferSchemaLimits, CITIES } from '../offer.constants.js';
import { offerValidateErrorMessage } from './offer-validate-error-message.js';

export default class CreateOfferDto {

  @MinLength(OfferSchemaLimits.MIN_NAME_LENGTH, {message: offerValidateErrorMessage.name.minLengthMessage })
  @MaxLength(OfferSchemaLimits.MAX_NAME_LENGTH, {message: offerValidateErrorMessage.name.maxLengthMessage })
  public name!: string;

  @MinLength(OfferSchemaLimits.MIN_DESC_LENGTH, {message: offerValidateErrorMessage.description.minLengthMessage })
  @MaxLength(OfferSchemaLimits.MAX_DESC_LENGTH, {message: offerValidateErrorMessage.description.maxLengthMessage })
  public description!: string;

  @IsDateString({}, {message: offerValidateErrorMessage.publishDate.message })
  public publishDate!: string;

  @IsEnum(CITIES, {message: offerValidateErrorMessage.city.message })
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
