import type { PropsWithChildren, ReactElement } from "react";
import classes from "./HeaderBranding.module.css";
import { joinClassNames } from "../../utils/misc";

export type HeaderBrandingProps = PropsWithChildren<{
  className?: string;
}>;

export type HeaderBrandingElement = ReactElement<HeaderBrandingProps>;

const HeaderBranding: React.FC<HeaderBrandingProps> = function ({
  children,
  className,
}) {
  const classNames = joinClassNames(classes["mast-head-branding"], className);

  return <div className={classNames}>{children}</div>;
};

export default HeaderBranding;
