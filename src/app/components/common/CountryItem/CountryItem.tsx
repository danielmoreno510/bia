import { LinkBox, LinkOverlay, useColorModeValue } from "@chakra-ui/react";

import "./styles.css";

const CountryItem: React.FC<CountryItem> = ({ country }) => {
  const bg = useColorModeValue("secondary.light", "secondary.dark");

  return (
    <LinkBox bg={bg} className="country-item cursor-pointer shadow-bottom">
      <img src={country.flags.png} alt="" />
      <LinkOverlay href={`/description/${country.name.common}`}>
        <div className="container">
          <div className="bold subtitle">{country.name.common}</div>
          <div className="flex">
            <div className="information bold">Population:</div>
            <div className="information pl-1">{country.population}</div>
          </div>
          <div className="flex">
            <div className="information bold">Region:</div>
            <div className="information pl-1">{country.region}</div>
          </div>
          <div className="flex">
            <div className="information bold">Capital:</div>
            <div className="information pl-1">{country.capital}</div>
          </div>
        </div>
      </LinkOverlay>
    </LinkBox>
  );
};

export default CountryItem;
