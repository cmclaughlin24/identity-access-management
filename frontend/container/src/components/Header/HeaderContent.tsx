import type { PropsWithChildren, ReactElement } from "react";
import classes from "./HeaderContent.module.css";
import { joinClassNames } from "../../utils/misc";

export type HeaderContentProps = PropsWithChildren<{
  className?: string;
}>;

export type HeaderContentElement = ReactElement<HeaderContentProps>;

const HeaderContent: React.FC<HeaderContentProps> = function ({
  children,
  className,
}) {
  const classNames = joinClassNames(classes["mast-head-content"], className);

  return <div className={classNames}>{children}</div>;
};

export default HeaderContent;
