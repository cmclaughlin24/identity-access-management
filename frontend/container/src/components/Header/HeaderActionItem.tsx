import type { PropsWithChildren, ReactElement } from "react";

export type HeaderActionItemProps = PropsWithChildren<{
  className?: string;
}>;

export type HeaderActionItemElement = ReactElement<HeaderActionItemProps>;

const HeaderActionItem: React.FC<HeaderActionItemProps> = function ({
  children,
  className,
}) {
  return <li className={className}>{children}</li>;
};

export default HeaderActionItem;
