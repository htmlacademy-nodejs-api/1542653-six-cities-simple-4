import { CITIES, FACILITIES, HOUSING_TYPES, OfferSchemaLimits } from './offer.constants.js';

export const validateCityName = (cityName: string): boolean => CITIES.includes(cityName);

export const validatePhotosCount = (photos: string[]): boolean => photos.length === OfferSchemaLimits.REQUIRED_PHOTOS_COUNT;

export const validateRating = (rating: number): boolean => {
  if (rating < OfferSchemaLimits.MIN_OFFER_RATING || rating > OfferSchemaLimits.MAX_OFFER_RATING) {
    return false;
  }

  const isFractional = rating.toString().includes('.');
  if (isFractional) {
    const chars = rating.toString().split('.').pop();
    return !!(chars && chars.length <= 1);

  }

  return true;
};

export const validateHousingType = (type: string): boolean => HOUSING_TYPES.includes(type);

export const validateFacilities = (customFacilities: string[]): boolean => customFacilities.length !== 0 && customFacilities.every((item) => FACILITIES.includes(item));
