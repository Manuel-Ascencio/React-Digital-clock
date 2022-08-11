import React from "react";
import date from "../Util";

function Day() {
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  const day = days[date.getDay()];

  return <p className="day">{day}</p>;
}

export default Day;
