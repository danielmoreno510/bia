interface CountryList {
  region: string;
  search: string;
}

interface Country {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    png: string;
  };
  subregion: string;
  borders?: string[];
  tld: string[];
  currencies: Currencies;
  languages: Languages;
}

interface Currencies {
  [key: string]: { name: string };
}

interface Languages {
  [key: string]: string;
}
