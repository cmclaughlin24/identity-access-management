import classes from "./Header.module.css";
import HeaderActions, { type HeaderActionsProps } from "./HeaderActions";
import HeaderBranding, { type HeaderBrandingProps } from "./HeaderBranding";
import HeaderNavigation, {
  type HeaderNavigationProps,
} from "./HeaderNavigation";

interface HeaderComponent extends React.FC<{
  branding: React.ReactElement<HeaderBrandingProps>;
  navigation?: React.ReactElement<HeaderNavigationProps>;
  actions?: React.ReactElement<HeaderActionsProps>;
}> {
  Branding: typeof HeaderBranding;
  Navigation: typeof HeaderNavigation;
  Actions: typeof HeaderActions;
}

const Header: HeaderComponent = function ({ branding, navigation, actions }) {
  return (
    <header role="banner" className={classes["mast-head"]}>
      {branding}
      {navigation}
      {actions}
    </header>
  );
};

Header.Branding = HeaderBranding;

Header.Navigation = HeaderNavigation;

Header.Actions = HeaderActions;

export default Header;
