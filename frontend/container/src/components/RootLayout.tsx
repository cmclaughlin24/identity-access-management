import { NavLink, Outlet } from "react-router-dom";
import Header from "./Header";
import logo from "../assets/wells-fargo-logo.webp";
import { navItems } from "../nav-items";

const Branding: React.FC = () => (
  <Header.Branding>
    <NavLink to="/" end>
      <img src={logo} alt="Wells Fargo Bank logo" />
    </NavLink>
  </Header.Branding>
);

const Actions: React.FC = () => <Header.Actions>Actions</Header.Actions>;

const RootLayout: React.FC = function () {
  return (
    <>
      <Header
        branding={<Branding />}
        navigation={<Header.Navigation items={navItems} />}
        actions={<Actions />}
      />
      <main>
        <Outlet />
      </main>
      <footer>Applicaton Footer</footer>
    </>
  );
};

export default RootLayout;
