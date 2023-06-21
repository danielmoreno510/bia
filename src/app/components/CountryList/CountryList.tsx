import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import CountryItem from "../common/CountryItem";
import LoadingIndicator from "../common/LoadingIndicator";
import {
  allCountries,
  countriesByRegion,
  countriesBySearch,
} from "../../services/api/countriesService";

const CheckCountries: React.FC<{ countries: Country[] }> = ({ countries }) => {
  return countries.length > 0
    ? countries.map((country) => (
        <CountryItem country={country} key={`${country.name.common}`} />
      ))
    : "No Results";
};

const ListWithLoading = LoadingIndicator(CheckCountries);

const CountryList: React.FC<CountryList> = ({ region, search }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState<Country[]>([]);

  const searchCountries = (service: Promise<Country[]>) => {
    setIsLoading(true);

    service
      .then((response: Country[]) => {
        setCountries(response);
        setIsLoading(false);
      })
      .catch(() => {
        setCountries([]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    region && searchCountries(countriesByRegion(region));
    search && searchCountries(countriesBySearch(search));
    !region && !search && searchCountries(allCountries());
  }, [region, search]);

  return (
    <Box className="mt-4 flex flex-wrap justify-space-between">
      <ListWithLoading isLoading={isLoading} countries={countries} />
    </Box>
  );
};

export default CountryList;
