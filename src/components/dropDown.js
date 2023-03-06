import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./panel";

const DropDrown = ({ options, onSelect, selected }) => {
  const [isOpen, setIsopen] = useState(false);
  const divEl = useRef();
  useEffect(() => {
    const handle = (event) => {
      if (!divEl.current.contains(event.target)) {
        setIsopen(false);
      }
    };
    document.addEventListener("click", handle, true);
    return () => {
      document.removeEventListener("click", handle);
    };
  });

  const handleClick = (id) => {
    setIsopen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsopen(false);
    onSelect(option);
  };
  const rendered = options.map((value) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(value)}
        key={value.value}
      >
        <h1>{value.label}</h1>
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative ">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {selected?.label || "select..."}
        <GoChevronDown />
      </Panel>

      {isOpen && <Panel className="absolute top-full">{rendered}</Panel>}
    </div>
  );
};

export default DropDrown;
