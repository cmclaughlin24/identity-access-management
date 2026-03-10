import type { ReactElement } from "react";
import type { HeaderActionItemElement } from "./HeaderActionItem";
import classes from "./HeaderActions.module.css";
import { joinClassNames } from "../../utils/misc";

export interface HeaderActionsProps {
  children: HeaderActionItemElement | HeaderActionItemElement[];
  className?: string;
}

export type HeaderActionsElement = ReactElement<HeaderActionsProps>;

const HeaderActions: React.FC<HeaderActionsProps> = function ({
  children,
  className,
}) {
  const classNames = joinClassNames(classes["mast-head-actions"], className);

  return <ul className={classNames}>{children}</ul>;
};

export default HeaderActions;
