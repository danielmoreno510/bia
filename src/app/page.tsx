"use client";

import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import Input from "./components/common/Input";
import Select from "./components/common/Select";
import CountryList from "./components/CountryList";

import { regions } from "./constants";

const Home: React.FC = () => {
  const [region, setRegion] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const searchByRegion = (regionSelected: string) => {
    setRegion(regionSelected);
    setSearch('')
  };

  const searchByInput = (value: string) => {
    setSearch(value)
    setRegion('');
  };

  return (
    <Box>
      <Box className="flex justify-space-between flex-wrap align-center mt-4">
        <Input
          Icon={BsSearch}
          placeholder="Search for a country"
          value={search}
          searchByInput={searchByInput}
        />
        <Select
          placeholder="Filter by Region"
          options={regions}
          value={region}
          onChange={searchByRegion}
        />
      </Box>
      <CountryList region={region} search={search} />
    </Box>
  );
};

export default Home;
