import React from "react";
import { Link } from "gatsby";

export const LinkButton = ({ children, to, className }) => {
  return (
    <Link
      className={`tracking-[0.2em] uppercase text-sm font-medium text-primary bg-white rounded-md ${className}`}
      to={to}
    >
      {children}
    </Link>
  );
};
