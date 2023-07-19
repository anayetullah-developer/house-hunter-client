import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/NavigationBar/NavigationBar";
import Footer from "../pages/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
