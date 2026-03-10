import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import ApplicationHeader from "./ApplicationHeader";

const RootLayout: React.FC = function () {
  return (
    <>
      <ApplicationHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
