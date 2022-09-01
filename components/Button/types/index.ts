import React from "react";

export type ButtonProps = {
  children: React.ReactElement | string;
  disabled?: boolean;
  className?: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
};
