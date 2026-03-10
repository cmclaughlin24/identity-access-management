import type { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import classes from "./HeaderNavigation.module.css";

export interface NavItem {
  label: string;
  route: string;
  children?: NavItem[];
}

export interface HeaderNavigationProps {
  items: NavItem[];
}

export type HeaderNavigationElement = ReactElement<HeaderNavigationProps>;

const HeaderNavigation: React.FC<HeaderNavigationProps> = function ({ items }) {
  return (
    <nav className={classes["mast-head-navigation"]}>
      <div className={classes["mast-head-navigation-mobile"]}>
        Mobile Navigation
      </div>
      <div className={classes["mast-head-navigation-desktop"]}>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.label}>
                <NavLink
                  to={item.route}
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNavigation;
