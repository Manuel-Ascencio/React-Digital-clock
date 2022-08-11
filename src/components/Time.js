import React from "react";
import { useState } from "react";
import date from "../Util";

function Time() {
  let time = date.toLocaleTimeString();

  const [ltime, setLtime] = useState(time);

  const [sig, setSig] = useState("");

  const UpdateTime = () => {
    let hour = date.getHours();
    time = new Date().toLocaleTimeString();
    setLtime(time);
    let amPm = hour >= 12 ? "PM" : "AM";
    setSig(amPm);
  };

  setInterval(UpdateTime, 1000);

  return (
    <h1>
      <time>
        {ltime} : {sig}
      </time>
    </h1>
  );
}

export default Time;
