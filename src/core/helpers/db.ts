export const getDataBaseUri = (
  userName: string,
  password: string,
  host: string,
  port: string,
  databaseName: string
): string => `mongodb://${userName}:${password}@${host}:${port}/${databaseName}?authSource=admin`;

