import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      Some kind of error...
      <div className="error-page__error"> DON'T PANIC!!!!</div>
      <Link to={"/main"}>Go back to home</Link>
    </div>
  );
};

export default ErrorPage;
