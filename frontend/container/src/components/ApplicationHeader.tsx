import { NavLink } from "react-router-dom";
import logo from "../assets/wells-fargo-logo.webp";
import Header from "./Header";
import classes from "./ApplicationHeader.module.css";
import MainNavigation from "./Navigation";
import { navItems } from "../nav-items";

const ApplicationHeader: React.FC = function () {
  return (
    <Header>
      <Header.Branding>
        <NavLink to="/" end>
          <img src={logo} alt="Wells Fargo Bank logo" />
        </NavLink>
      </Header.Branding>
      <Header.Content className={classes["mast-head-content--responsive"]}>
        <div className={classes["mast-head-mobile"]}>Mobile Header Content</div>
        <div className={classes["mast-head-desktop"]}>
          <MainNavigation
            items={navItems}
            className={classes["mast-head-navigation"]}
          >
            {(item) => item.label}
          </MainNavigation>
          <Header.Actions>
            <Header.ActionItem>
              <NavLink to="/authentication/login" end>
                Login
              </NavLink>
            </Header.ActionItem>
          </Header.Actions>
        </div>
      </Header.Content>
    </Header>
  );
};

export default ApplicationHeader;
