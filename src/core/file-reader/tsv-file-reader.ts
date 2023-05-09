import { readFileSync } from 'node:fs';
import { FileReaderInterface } from './file-reader.interface';
import { Offer } from '../../types/offer.type';

export default class TSVFileReader implements FileReaderInterface {
  private fileRowData = '';

  constructor(public filename: string) {}


  public read = () => {
    this.fileRowData = readFileSync(this.filename, {encoding: 'utf-8'});
  };

  public convertFileContentToArray = (): Offer[] => {
    if (!this.fileRowData) {
      return [];
    }

    return this.fileRowData
      .split('\n')
      .filter((item) => item.trim() !== '')
      .map((line) => line.split('\t'))
      .map((
        [
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
        ]
      ) => {
        const [longtitude, latitude] = coordinates.split(';');
        return {
          name,
          description,
          publishDate,
          city,
          prevImageUrl,
          photos: photos.split(';'),
          isPremium: !!isPremium,
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
      });
  };
}
