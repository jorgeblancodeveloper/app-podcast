import React from "react";
import { connect } from "react-redux";

const Header = ({ podcastList }) => {
  return (
    <div className="header">
      <div className="header__title">Podcaster</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    podcastList: state.podcastList,
  };
};
export default connect(mapStateToProps, {})(Header);
