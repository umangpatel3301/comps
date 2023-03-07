import classNames from "classnames";
import useNavigation from "../hooks/use-navigate";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();
  const handleClick = (event) => {
    if (!event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };
  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );
  return (
    <a
      href={to}
      className={classes}
      //   target="_blank"
      onClick={handleClick}
      //   rel="noreferrer"
    >
      {children}
    </a>
  );
};
export default Link;
