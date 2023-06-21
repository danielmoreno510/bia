export const getCurrencies = (currencies: Currencies): string[] => {
  const keys = Object.keys(currencies);
  const arrayCurrencies = keys.map((key) => currencies[key].name);
  return arrayCurrencies;
};

export const getLanguages = (languages: Languages): string[] => {
  const keys = Object.keys(languages);
  const arrayLanguages = keys.map((key) => languages[key]);
  return arrayLanguages;
};
