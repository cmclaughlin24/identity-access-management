import { Outlet } from "react-router-dom";
import ApplicationHeader from "./ApplicationHeader";

const RootLayout: React.FC = function () {
  return (
    <>
      <ApplicationHeader />
      <main>
        <Outlet />
      </main>
      <footer>Applicaton Footer</footer>
    </>
  );
};

export default RootLayout;
