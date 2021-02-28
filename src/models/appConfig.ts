export interface IAppConfig {
  input: {
    filePath: string;
    location: {
      latitude: number;
      longitude: number;
    };
  };
  output: {
    filePath: string;
  };
}
