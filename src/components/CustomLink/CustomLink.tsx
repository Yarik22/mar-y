import React from "react";
import { Link, LinkProps, useMatch } from "react-router-dom";

interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
  to: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, children, ...props }) => {
  const match = useMatch({
    path: to,
    end: true,
  });

  return (
    <>
      <Link to={to} className={match ? "active" : ""} {...props}>
        {children}
      </Link>
    </>
  );
};

export default CustomLink;
