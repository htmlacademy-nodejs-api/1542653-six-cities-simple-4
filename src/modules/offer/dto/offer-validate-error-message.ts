import { CITIES, HOUSING_TYPES, OfferSchemaLimits } from '../offer.constants.js';

export const offerValidateErrorMessage = {
  name: {
    minLengthMessage: `Minimum length of offer name should be ${OfferSchemaLimits.MIN_NAME_LENGTH}`,
    maxLengthMessage: `Maximum lenght of offer name should be ${OfferSchemaLimits.MAX_NAME_LENGTH}`
  },

  description: {
    minLengthMessage: `Minimum length of offer description shold be ${OfferSchemaLimits.MIN_DESC_LENGTH}`,
    maxLengthMessage: `Maximum length of of offer description should be ${OfferSchemaLimits.MAX_DESC_LENGTH}`,
  },

  publishDate: {
    message: 'publish date should have to ISO string format'
  },

  city: {
    message: `City should be item of list: ${CITIES.join(', ')}`
  },

  prevImageUrl: {
    message: 'Preview image is not match url type of string'
  },

  photos: {
    notArrayMessage: 'Photos field should be array',
    emptyArrayMessage: 'Array of photos should not be empty',
    minArrayLengthMessage: `Length of photos array should be ${OfferSchemaLimits.REQUIRED_PHOTOS_COUNT}`,
    maxArrayLengthMessage: `Length of photos array should be ${OfferSchemaLimits.REQUIRED_PHOTOS_COUNT}`
  },

  isPremium: {
    message: 'isPremium should be boolean type'
  },

  rating: {
    decimalMessage: 'Offer rating should be integer or decimal number with one sign after decimal',
    minRatingMessage: `Minimum rating offer number should be ${OfferSchemaLimits.MIN_OFFER_RATING}`,
    maxRatingMessage: `Maximum rating offer number should be ${OfferSchemaLimits.MAX_OFFER_RATING}`
  },

  housingType: {
    message: `The housing type should be one item of the list: ${HOUSING_TYPES.join(', ')}`,
  },

  roomCount: {
    intMessage: 'Offer room count should be contain integer value',
    minRoomCountMessage: `Offer room count minimum should be ${OfferSchemaLimits.MIN_ROOM_COUNT}`,
    maxRoomCountMessage: `Offer room count maximum should be ${OfferSchemaLimits.MAX_ROOM_COUNT}`
  },

  guestCount: {
    message: 'Offer guest count should be contain integer value',
    minGuestCountMessage: `Offer guest count minimum should be ${OfferSchemaLimits.MIN_GUEST_COUNT}`,
    maxGuestCountMessage: `Offer guest count maximum should be ${OfferSchemaLimits.MAX_GUEST_COUNT}`
  },

  price: {
    intMessage: 'Offer price should be integer value',
    minPriceMessage: `Minimum offer price should be ${OfferSchemaLimits.MIN_OFFER_PRICE}`,
    maxPriceMessage: `Maximum offer price should be ${OfferSchemaLimits.MAX_OFFER_PRICE}`
  }
};
