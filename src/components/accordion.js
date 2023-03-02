import { useState } from "react";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

const Accordiion = ({ items }) => {
  const [expand, setExpand] = useState(-1);
  const handleClick = (nextIndex) => {
    setExpand((currentExpanded) => {
      if (currentExpanded === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedAccord = items.map((item, id) => {
    const expanded = id === expand;
    const icons = (
      <span className="text-2xl">
        {expanded ? <IoIosArrowDown /> : <IoIosArrowBack />}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          className="flex p-3 justify-between bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(id)}
        >
          {item.label} {icons}
        </div>
        {expanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedAccord}</div>;
};

export default Accordiion;
