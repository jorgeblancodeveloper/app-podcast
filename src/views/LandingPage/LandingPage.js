 import React from "react";
import { connect } from "react-redux";

const LandingPage = () =>  <div className="select-container"> repatata</div> ;


const mapStateToProps = (state) => {
  return {
    podcastList: state.podcastList,
  };
};
export default connect(mapStateToProps, {})(
  LandingPage
);
// export default LandingPage;
