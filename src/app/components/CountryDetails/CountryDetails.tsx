import { getCurrencies, getLanguages } from "@/app/utils/formatCountryData";
import { Box, Link, useColorModeValue } from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";

const CountryDetails: React.FC<{ country: Country | undefined }> = ({
  country,
}) => {
  const bg = useColorModeValue("secondary.light", "secondary.dark");

  return country ? (
    <div>
      <Link
        bg={bg}
        className="width-fit information p-2 pl-4 pr-4 mb-8 flex align-center cursor-pointer"
        href="../"
      >
        <BsArrowLeft className="mr-1" /> Back
      </Link>

      <div className="flex flex-wrap space-around-space-around align-center">
        <img src={country.flags.png} className="pr-2" alt="" />
        <div className="card">
          <div className="flex flex-wrap justify-space-between">
            <div className="pr-8">
              <div className="bold pb-4">{country.name.common}</div>
              <div className="flex pb-2">
                <div className="information bold">Native Name:</div>
                <div className="information pl-1">{country.name.official}</div>
              </div>
              <div className="flex pb-2">
                <div className="information bold">Population:</div>
                <div className="information pl-1">{country.population}</div>
              </div>
              <div className="flex pb-2">
                <div className="information bold">Region:</div>
                <div className="information pl-1">{country.region}</div>
              </div>
              <div className="flex pb-2">
                <div className="information bold">Sub Region:</div>
                <div className="information pl-1">{country.subregion}</div>
              </div>
              <div className="flex pb-2">
                <div className="information bold">Capital:</div>
                <div className="information pl-1">{country.capital}</div>
              </div>
            </div>
            <div>
              <div className="bold pb-4">&nbsp;</div>
              <div className="flex pb-2">
                <div className="information bold">Top Level Domain:</div>
                <div className="information pl-1">{country.tld[0]}</div>
              </div>
              <div className="flex pb-2">
                <div className="information bold">Currencies:</div>
                <div className="information pl-1">
                  {getCurrencies(country.currencies).join(", ")}
                </div>
              </div>
              <div className="flex pb-2">
                <div className="information bold">Languages:</div>
                <div className="information pl-1">
                  {getLanguages(country.languages).join(", ")}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex pt-6 align-center left">
              <div className="information bold">Border Countries:</div>
              <div className="information pl-1 flex">
                {(country.borders || []).map((border) => (
                  <Box bg={bg} key={border} className="information m-1 p-1">
                    {border}
                  </Box>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    "No Results"
  );
};

export default CountryDetails;
