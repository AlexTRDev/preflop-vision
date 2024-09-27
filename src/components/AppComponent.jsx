import { Outlet } from "react-router-dom";
import App from "../App";

const AppComponent = () => {
  return (
    <div className="flex flex-col  items-center justify-center bg-base-100 select-none">
      <App />
      <Outlet />
    </div>
  );
};

export default AppComponent;
