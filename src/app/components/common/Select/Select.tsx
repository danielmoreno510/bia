import { Select as SelectChakra, useColorModeValue } from "@chakra-ui/react";

const Select: React.FC<Select> = ({placeholder, options, value, onChange}) => {
  const bg = useColorModeValue("secondary.light", "secondary.dark");

  return (
    <SelectChakra
    placeholder={placeholder}
    maxWidth={180}
    width="auto"
    bg={bg}
    value={value}
    onChange={({target}) => onChange(target.value)}
    border="0px"
  >
    {options.map((option: ILabelValue) => (
      <option value={option.value} key={option.value}>
        {option.label}
      </option>
    ))}
  </SelectChakra>
  );
};

export default Select;
