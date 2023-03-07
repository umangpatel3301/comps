import AccordionButton from "./pages/accordionPage";
import DropDown from "./pages/dropDownPage";
import SlideBar from "./components/slideBar";
import Route from "./components/route";
import ButtonPage from "./pages/buttonPage";
import ModalPage from "./pages/modelPage";
const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4 px-6">
      <SlideBar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionButton />
        </Route>
        <Route path="/">
          <DropDown />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
      </div>
    </div>
  );
};

export default App;
