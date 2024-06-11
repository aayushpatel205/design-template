import React from "react";
import "./loader.css";

const Loader = ({ show }) => {
  if (!show) return null;
  return (
    <div className="loader-wrapper">
      <div className="spinner" />
    </div>
  );
};

export default Loader;
