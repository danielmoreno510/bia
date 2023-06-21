"use client";

import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import CountryDetails from "../../components/CountryDetails";
import LoadingIndicator from "../../components/common/LoadingIndicator";

import "./styles.css";
import { countriesBySearch } from "@/app/services/api/countriesService";

const DescriptionWithLoading = LoadingIndicator(CountryDetails);

const page = ({ params }: { params: { id: string } }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [country, setCountry] = useState<Country>();

  const searchCountries = (name: string) => {
    setIsLoading(true);
    countriesBySearch(name)
      .then((response) => {
        setCountry(response[0]);
        setIsLoading(false);
      })
      .catch(() => {
        setCountry(undefined);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    searchCountries(params.id);
  }, [params.id]);

  return (
    <Box className="mt-4">
      <DescriptionWithLoading isLoading={isLoading} country={country} />
    </Box>
  );
};

export default page;
