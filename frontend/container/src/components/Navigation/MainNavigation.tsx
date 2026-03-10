import type { ReactNode } from "react";
import { joinClassNames } from "../../utils/misc";
import classes from "./MainNavigation.module.css";

export interface NavItem {
  label: string;
  route: string;
  children?: NavItem[];
}

export interface MainNavigationProps {
  items: NavItem[];
  children: (item: NavItem) => ReactNode;
  className?: string;
}

export interface MainNavigationComponent extends React.FC<MainNavigationProps> {}

const MainNavigation: MainNavigationComponent = function ({
  className,
  children,
  items,
}) {
  const classNames = joinClassNames(classes["navigation"], className);

  return (
    <nav className={classNames}>
      <ul>
        {items.map((item) => (
          <li key={item.label}>{children(item)}</li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;
