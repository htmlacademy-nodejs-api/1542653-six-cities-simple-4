import dayjs from 'dayjs';

// code from repository https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
export const getRandomInt = (a: number, b: number): number => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomItem = <T>(items: T[]): T => {
  const lastIndexList = items.length - 1;
  const randomIndexElement = getRandomInt(0, lastIndexList);
  return items[randomIndexElement];
};

export const getRandomDate = (): string => {
  const FIRST_WEEK_DAY = 1;
  const LAST_WEEK_DAY = 7;
  return dayjs().subtract(getRandomInt(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day').toISOString();
};

export const getRandomItems = <T>(items: T[]): T[] => {
  const lastIndexList = items.length - 1;
  const startPosition = getRandomInt(1, lastIndexList);
  const endPosition = startPosition + getRandomInt(startPosition, items.length);
  return items.slice(startPosition, endPosition);
};

export const getExactCountItems = <T>(items: T[], exactCount: number): T[] => Array.from(
  {length: exactCount},
  () => getRandomItem<T>(items)
);

export const getRandomFlag = (): boolean => Math.random() > 0.5;
