import HeaderBranding, { type HeaderBrandingElement } from "./HeaderBranding";
import type { HeaderContentElement } from "./HeaderContent";
import classes from "./Header.module.css";
import HeaderContent from "./HeaderContent";
import HeaderActionItem from "./HeaderActionItem";
import HeaderActions from "./HeaderActions";
import { joinClassNames } from "../../utils/misc";

/**
 * A list of all the valid children of the `Header` component. Used to ensure
 * that only valid children are passed to the Header component.
 */
type HeaderChildren = HeaderBrandingElement | HeaderContentElement;

export interface HeaderComponent extends React.FC<{
  children: HeaderChildren[];
  className?: string;
}> {
  /**
   * A sub-component of `Header` that is used to render a list of actions that
   * should act as app-wide functions, such as login/logout, account settings,
   * etc.
   *
   * @example
   * ```tsx
   * <Header.Actions>
   *   <Header.ActionItem>
   *     <NavLink to="/authentication/login" end>
   *       Login
   *     </NavLink>
   *   </Header.ActionItem>
   * </Header.Actions>
   * ```
   */
  Actions: typeof HeaderActions;

  /**
   * A sub-component of `Header.Actions` that is used to render an individual action item
   * that should act as an app-wide function, such as login/logout, account
   * settings, etc.
   *
   * @example
   * ```tsx
   * <Header.Actions>
   *   <Header.ActionItem>
   *     <NavLink to="/authentication/login" end>
   *       Login
   *     </NavLink>
   *   </Header.ActionItem>
   * </Header.Actions>
   * ```
   */
  ActionItem: typeof HeaderActionItem;

  /**
   * A sub-component of `Header` that is used to render the branding of the app, such
   * as the logo and company name.
   *
   * @example
   * ```tsx
   * <Header.Branding>
   *    <img src="/path/to/image.jpg" alt="Super Awesome Brand Logo" />
   * </Header.Branding>
   * ```
   */
  Branding: typeof HeaderBranding;

  /**
   * A sub-component of `Header` that is used to render the main content of the header
   * such as the main navigation, search bar, etc.
   *
   * @example
   * ```tsx
   * <Header.Content>
   *  <nav>
   *    <ul>
   *      <li>Home</li>
   *      <li>About</li>
   *    </ul>
   *  </nav>
   * </Header.Content>
   * ```
   */
  Content: typeof HeaderContent;
}

const Header: HeaderComponent = function ({ className, children }) {
  const classNames = joinClassNames(classes["mast-head"], className);

  return (
    <header role="banner" className={classNames}>
      {children}
    </header>
  );
};

Header.Actions = HeaderActions;
Header.ActionItem = HeaderActionItem;
Header.Branding = HeaderBranding;
Header.Content = HeaderContent;

export default Header;
