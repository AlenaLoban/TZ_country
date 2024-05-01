export type countryType = {
  capital: [string];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common?: string;
    official?: string;
    nativeName?: {};
  };
  population: number;
  region: string;
};
