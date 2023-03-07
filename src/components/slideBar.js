import Link from "./link";

const SlideBar = () => {
  const link = [
    {
      label: "dropdown",
      path: "/",
    },
    { label: "accordion", path: "/accordion" },
    {
      label: "button",
      path: "/button",
    },
    {
      label: "modal",
      path: "/modal",
    },
  ];

  const renderedLinks = link.map((link) => {
    return (
      <Link
        key={link.label}
        className="mb-3"
        to={link.path}
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
      {renderedLinks}
    </div>
  );
};

export default SlideBar;
