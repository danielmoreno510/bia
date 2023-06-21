import http from "../http";

export const countriesByRegion = async (region: string) => {
  const { data } = await http.get(`region/${region}`);
  return data;
};

export const countriesBySearch = async (search: string) => {
  const { data } = await http.get(`name/${search}`);
  return data;
};

export const allCountries = async () => {
  const { data } = await http.get('all');
  return data;
};