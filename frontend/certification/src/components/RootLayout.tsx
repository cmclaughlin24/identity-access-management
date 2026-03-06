import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <>
      <header>Application Header & Navigation Items</header>
      <main>
        <Outlet />
      </main>
      <footer>Applicaton Footer</footer>
    </>
  );
}

export default RootLayout;
