export interface DataBaseClientInterface {
    connect: (uri: string) => Promise<void>;
    disconnect: () => Promise<void>;
}
