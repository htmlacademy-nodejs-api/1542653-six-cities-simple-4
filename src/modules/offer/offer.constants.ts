export const CITIES: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const HOUSING_TYPES: string[] = ['apartment', 'house', 'room', 'hotel'];

export const FACILITIES: string[] = ['Breakfast', 'Air conditioning', 'Laptop friendly workspace', 'Baby seat', 'Washer', 'Towels', 'Fridge'];

export enum OfferSchemaLimits {
    MIN_NAME_LENGTH = 10,
    MAX_NAME_LENGTH = 100,
    MIN_DESC_LENGTH = 20,
    MAX_DESC_LENGTH = 1024,
    REQUIRED_PHOTOS_COUNT = 6,
    MIN_OFFER_RATING = 1,
    MAX_OFFER_RATING = 5,
    MIN_ROOM_COUNT = 1,
    MAX_ROOM_COUNT = 8,
    MIN_GUEST_COUNT = 1,
    MAX_GUEST_COUNT = 10,
    MIN_OFFER_PRICE = 100,
    MAX_OFFER_PRICE= 100000,

}
