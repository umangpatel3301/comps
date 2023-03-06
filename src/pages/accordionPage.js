import Accordiion from "../components/accordion";

const AccordionButton = () => {
  const item = [
    {
      id: 1,
      label: "Learn JavaScript",
      content:
        "Javascript is only language that run on both server and browser side Javascript is only language that run on both server and browser side Javascript is only language that run on both server and browser side",
    },
    {
      id: 2,
      label: "Learn ReactJs",
      content:
        "Reactjs is library of Reactjs for front end work Reactjs is library of Reactjs for front end work Reactjs is library of Reactjs for front end work",
    },
    {
      id: 3,
      label: "learn NodeJs",
      content:
        "Nodejs is also a library of nodejs for server side work Nodejs is also a library of nodejs for server side work Nodejs is also a library of nodejs for server side work",
    },
  ];

  return <Accordiion items={item} />;
};

export default AccordionButton;
