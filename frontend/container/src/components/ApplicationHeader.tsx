import { NavLink } from "react-router-dom";
import Header from "./Header";
import { navItems } from "../nav-items";
import logo from "../assets/wells-fargo-logo.webp";

const ApplicationHeader: React.FC = function () {
  return (
    <Header>
      <Header.Branding>
        <NavLink to="/" end>
          <img src={logo} alt="Wells Fargo Bank logo" />
        </NavLink>
      </Header.Branding>
      <Header.MainNavigation items={navItems} />
      <Header.Actions>
        <NavLink to="/authentication/login">Login</NavLink>
      </Header.Actions>
    </Header>
  );
};

export default ApplicationHeader;
