import { CITIES, OfferSchemaLimits } from '../offer.constants.js';

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
  }

};
