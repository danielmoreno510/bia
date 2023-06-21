import { Box, useColorMode, useColorModeValue,  } from "@chakra-ui/react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

const Header: React.FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const bg = useColorModeValue("secondary.light", "secondary.dark");

  return (
    <Box bg={bg} className="shadow-bottom">
      <ul className="flex justify-space-between padding-by-default padding-hotizontal">
        <li className="title bold">Where in the world?</li>
        <li className="flex align-center cursor-pointer" onClick={toggleColorMode}>
          {colorMode === 'dark' ? <BsSunFill/> : <BsFillMoonFill/>}
          <small className="ml-2">{colorMode === 'dark' ? "Light" : "Dark"} Mode</small>
        </li>
      </ul>
    </Box>
  );
};

export default Header;
