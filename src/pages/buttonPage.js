import { IoIosNotifications, IoIosCloudDownload } from "react-icons/io";
import Button from "../components/button";

const ButtonPage = () => {
  return (
    <div className="flex justify-center gap-4 flex-col">
      <div>
        <Button primary outline rounded>
          <IoIosNotifications />
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary outline rounded>
          <IoIosCloudDownload />
          Warning
        </Button>
      </div>
      <div>
        <Button success>SomeThing</Button>
      </div>
      <div>
        <Button warning>Click To Add</Button>
      </div>
      <div>
        <Button dangerous>Click To Delete</Button>
      </div>
    </div>
  );
};

export default ButtonPage;
