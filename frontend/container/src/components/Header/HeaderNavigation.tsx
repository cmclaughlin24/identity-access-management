import { NavLink } from "react-router-dom";
import classes from "./HeaderNavigation.module.css";

export interface NavItem {
  label: string;
  route: string;
}

export interface HeaderNavigationProps {
  items: NavItem[];
  onNavigate?: (item: NavItem) => void;
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = function ({
  items,
  onNavigate,
}) {
  function handleClick(item: NavItem) {
    if (!onNavigate) {
      return;
    }

    onNavigate(item);
  }

  return (
    <nav className={classes["mast-head-navigation"]}>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.label}>
              <NavLink
                to={item.route}
                onClick={() => handleClick(item)}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
