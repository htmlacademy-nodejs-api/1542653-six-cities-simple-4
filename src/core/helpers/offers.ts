import { Offer } from '../../types/offer.type';

export const convertFileLineToOffer = (offerRowLine: string): Offer => {
  const [
    name,
    description,
    publishDate,
    city,
    prevImageUrl,
    photos,
    isPremium,
    rating,
    housingType,
    roomCount,
    guestCount,
    price,
    facilities,
    authorId,
    commentCount,
    coordinates,
  ] = offerRowLine.replace('\n', '').split('\t');

  const [longtitude, latitude] = coordinates.split(';');

  return {
    name,
    description,
    publishDate,
    city,
    prevImageUrl,
    photos: photos.split(';'),
    isPremium: Boolean(isPremium),
    rating: Number(rating),
    housingType,
    roomCount: Number(roomCount),
    guestCount: Number(guestCount),
    price: Number(price),
    facilities: facilities.split(';'),
    authorId: Number(authorId),
    commentCount: Number(commentCount),
    coordinates: {
      longtitude,
      latitude
    }
  };
};
