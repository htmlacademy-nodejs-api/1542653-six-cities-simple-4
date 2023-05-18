export interface ConfigInterface<T>{
  get: <U extends keyof T>(key: U) => T[U];
}
