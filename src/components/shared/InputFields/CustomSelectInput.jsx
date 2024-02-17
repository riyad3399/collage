import { Option, Select } from "@material-tailwind/react";
import { useState } from "react";

const CustomSelectInput = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Select variant="outlined" label="Sort by Department">
      <Option>Commerce</Option>
      <Option>Science</Option>
      <Option>Arts</Option>
    </Select>
  );
};

export default CustomSelectInput;
