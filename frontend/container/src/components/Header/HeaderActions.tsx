import type { PropsWithChildren, ReactElement } from "react";
import classes from "./HeaderActions.module.css";

export type HeaderActionsProps = PropsWithChildren<{}>;

export type HeaderActionsElement = ReactElement<HeaderActionsProps>;

const HeaderActions: React.FC<HeaderActionsProps> = function ({ children }) {
  return <div className={classes["mast-head-actions"]}>{children}</div>;
};

export default HeaderActions;
