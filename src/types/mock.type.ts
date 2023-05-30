export type MockCityCoordinates = {
  latitude: string[],
  longitude: string[],
}

export type MockOffer = {
  names: string[],
  descriptions: string[],
  cities: string[],
  photos: string[],
  types: string[],
  facilities: string[],
  people: string[],
  emails: string[],
  avatars: string[]
  coordinates: Record<string, MockCityCoordinates>
}
