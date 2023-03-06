import classNames from "classnames";

const Panel = ({ children, className, ...rest }) => {
  const finalClassName = classNames(
    "border rounded p-3 shadow bg-white w-full",
    classNames
  );
  return (
    <div {...rest} className={finalClassName}>
      {children}
    </div>
  );
};

export default Panel;
