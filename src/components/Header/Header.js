import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Separator } from "../../elements/Separator/Separator";
import  GlobalLoading  from "../../elements/GlobalLoading/GlobalLoading";

const Header = props => {
  return (
    <div className="header">
      <div className="header__title">
        <Link to="/main">{props.children}</Link>
      </div>
      <GlobalLoading />
      <Separator />

    </div>
  );
};

export default Header;
