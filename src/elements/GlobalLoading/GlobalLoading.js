import React from "react";
import { connect } from "react-redux";

const GlobalLoading = (props) => {
  return (
    <>
      <div className={`global-loading${props.isLoading.length ? "--active" : ""}`} />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, {})(GlobalLoading);
