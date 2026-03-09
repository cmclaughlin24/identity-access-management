import type { PropsWithChildren, ReactElement } from "react";
import classes from "./HeaderBranding.module.css";

export type HeaderBrandingProps = PropsWithChildren<{}>;

export type HeaderBrandingElement = ReactElement<HeaderBrandingProps>;

const HeaderBranding: React.FC<HeaderBrandingProps> = function ({ children }) {
  return <div className={classes["mast-head-branding"]}>{children}</div>;
};

export default HeaderBranding;
