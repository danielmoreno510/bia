import {
  Input as InputChakra,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";

import "./styles.css";

const Input: React.FC<Input> = ({
  Icon,
  placeholder,
  value,
  searchByInput,
}) => {
  const bg = useColorModeValue("secondary.light", "secondary.dark");

  return (
    <InputGroup className="inline input">
      <InputLeftElement className="InputLeft" pointerEvents="none">
        <Icon />
      </InputLeftElement>
      <InputChakra
        placeholder={placeholder}
        bg={bg}
        _placeholder={{ color: "inherit" }}
        border="0px"
        value={value}
        onChange={({ target }) => searchByInput(target.value)}
      ></InputChakra>
    </InputGroup>
  );
};

export default Input;
