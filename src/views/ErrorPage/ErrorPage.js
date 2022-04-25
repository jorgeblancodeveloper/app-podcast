import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
     <div className="error-page">
         <div className="error-page__error"> Some kind of error...</div>
         <Link to={'/main'}>Go back to home</Link>
     </div>
  );
};

export default ErrorPage