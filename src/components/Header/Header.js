import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Header = ({ podcastList }) => {
  return (
    <div className="header">
      <div className="header__title"><Link to="/main">Podcaster</Link>
</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    podcastList: state.podcastList,
  };
};
export default connect(mapStateToProps, {})(Header);
