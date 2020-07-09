/*
 * @Author: Chengxu Bian
 * @Date: 2020-07-06 22:44:18
 * @Last Modified by:   Chengxu Bian
 * @Last Modified time: 2020-07-06 22:44:18
 */

import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { className, index, disabled, children, style } = props;

  const context = useContext(MenuContext);

  const classes = classNames("fancy-menu-item", className, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  });

  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === "number") {
      context.onSelect(index);
    }
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = "MenuItem";

export default MenuItem;
