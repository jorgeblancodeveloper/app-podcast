import React from "react";
import { connect } from "react-redux";

const GlobalLoading = ({ isLoading }) => {
  return (
    <>
      <div className={`global-loading${isLoading.length ? "--active" : ""}`} />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, {})(GlobalLoading);
