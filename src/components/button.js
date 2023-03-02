import PropTypes from "prop-types";

import className from "classnames";
const Button = ({
  children,
  success,
  primary,
  secondary,
  outline,
  rounded,
  warning,
  dangerous,
}) => {
  const classes = className("flex item-center gap-2 px-3 py-1.5 border-2", {
    "border-blue-600 bg-blue-500 text-white": primary,
    "border-gray-600 bg-gray-500 text-white": secondary,
    "border-green-600 bg-green-500 text-white": success,
    "border-yellow-600 bg-yellow-500 text-white": warning,
    "border-red-600 bg-red-500 text-white": dangerous,
    "rounded-full": rounded,
    "bg-white": outline,
    "bg-white text-blue-500": outline && primary,
    "bg-white text-gray-800": outline && secondary,
    "bg-white text-green-500": outline && success,
    "bg-white text-yellow-400": outline && warning,
    "bg-white text-red-500": outline && dangerous,
  });
  return <button className={classes}>{children}</button>;
};

Button.propTypes = {
  checkVariationValue: ({
    success,
    primary,
    secondary,
    warning,
    dangerous,
  }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!dangerous) +
      Number(!!success);

    if (count > 1) {
      return new Error("Only one of true");
    }
  },
};
export default Button;
