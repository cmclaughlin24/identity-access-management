import { isValidElement } from "react";
import classes from "./Header.module.css";
import HeaderActions, { type HeaderActionsElement } from "./HeaderActions";
import HeaderBranding, { type HeaderBrandingElement } from "./HeaderBranding";
import HeaderNavigation, {
  type HeaderNavigationElement,
} from "./HeaderNavigation";

type HeaderChildren =
  | HeaderBrandingElement
  | HeaderNavigationElement
  | HeaderActionsElement;

interface HeaderComponent extends React.FC<{ children: HeaderChildren[] }> {
  Branding: typeof HeaderBranding;
  MainNavigation: typeof HeaderNavigation;
  Actions: typeof HeaderActions;
}

function parseChildren(children: HeaderChildren[]) {
  let branding: HeaderBrandingElement | undefined;
  let navigation: HeaderNavigationElement | undefined;
  let actions: HeaderActionsElement | undefined;

  for (const child of children) {
    if (!isValidElement(child)) {
      continue;
    }

    if (child.type === HeaderBranding) {
      if (branding) {
        throw new Error(
          `HeaderComponent: only one ${HeaderBranding.name} child element is allowed`,
        );
      }

      branding = child as HeaderBrandingElement;
    } else if (child.type === HeaderNavigation) {
      if (navigation) {
        throw new Error(
          `HeaderComponent: only one ${HeaderNavigation.name} child element is allowed`,
        );
      }

      navigation = child as HeaderNavigationElement;
    } else if (child.type === HeaderActions) {
      if (actions) {
        throw new Error(
          `HeaderComponent: only one ${HeaderActions.name} child element is allowed`,
        );
      }

      actions = child as HeaderActionsElement;
    }
  }

  return { branding, navigation, actions };
}

const Header: HeaderComponent = function ({ children }) {
  const { branding, navigation, actions } = parseChildren(children);

  return (
    <header role="banner" className={classes["mast-head"]}>
      {branding && branding}
      {navigation && navigation}
      {actions && actions}
    </header>
  );
};

Header.Branding = HeaderBranding;

Header.MainNavigation = HeaderNavigation;

Header.Actions = HeaderActions;

export default Header;
