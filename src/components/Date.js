import React from "react";
import date from "../Util";

function Date() {
  let dat = date.toLocaleDateString();
  return (
    <div className="date">
      <time>{dat}</time>
    </div>
  );
}

export default Date;
