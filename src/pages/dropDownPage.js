import { useState } from "react";
import DropDrown from "../components/dropDown";

const DropDown = () => {
  const options = [
    {
      label: "sallary of 2009 is 23000",
      value: 23000,
    },
    { label: "salary of 2015 is 45000", value: 45000 },
    {
      label: "salary of 2022 is 95000",
      value: 95000,
    },
  ];
  const [selected, setSelected] = useState(null);
  const handleClick = (value) => {
    setSelected(value);
  };
  return (
    <DropDrown options={options} onSelect={handleClick} selected={selected} />
  );
};

export default DropDown;
