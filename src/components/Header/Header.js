import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "../../elements/";

const Header = ({ children }) => {
  return (
    <div className="header">
      <div className="header__title">
        <Link to="/main">{children}</Link>
      </div>
      <div className="header__separator">
      <Separator className="header__separator"/>
      </div>
    </div>
  );
};

export default Header;
