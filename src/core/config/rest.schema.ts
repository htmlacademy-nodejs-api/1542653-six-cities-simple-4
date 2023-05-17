import convict from 'convict';
import validators from 'convict-format-with-validator';

convict.addFormats(validators);

export type RestSchema = {
  PORT: number;
  DB_HOST: string;
  SALT: string;
}

export const configRestSchema = convict<RestSchema>({
  PORT: {
    doc: 'Port for incoming connections',
    format: 'port',
    env: 'PORT',
    default: 5000,
  },
  DB_HOST: {
    doc: 'IP addfess of the database server (MongoDB)',
    format: 'ipaddress',
    env: 'DB_HOST',
    default: '127.0.0.1'
  },
  SALT: {
    doc: 'Salt for password hash',
    format: String,
    env: 'SALT',
    default: null,
  }
});
