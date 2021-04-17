import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h1 style={{ fontSize: "48px" }}>Cats Paradise</h1>
      <h3>There are {props.length} cats breeds</h3>
      <h4>
        On average a cat can weight about{" "}
        <span className="details">{props.avgWeight}</span> and live{" "}
        <span className="details">{props.avgAge}</span> years.
      </h4>
    </div>
  );
}

export default Header;
