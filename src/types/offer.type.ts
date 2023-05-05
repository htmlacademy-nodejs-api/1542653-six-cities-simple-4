type OfferCoordinates = {
  longtitude: string;
  latitude: string;
};

export type Offer = {
  name: string;
  description: string;
  publishDate: string;
  city: string;
  prevImageUrl: string;
  photos: string[],
  isPremium: boolean;
  rating: number;
  housingType: string;
  authorId: number;
  commentCount: number;
  coordinates: OfferCoordinates
};
