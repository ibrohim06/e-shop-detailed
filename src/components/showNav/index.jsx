import React from "react";
import "./style.scss";

export default function ShowNav({ pathname }) {
  const str = pathname;

  const newStr = str.replace(/\//g, " > ");

  if (newStr[1] == ">" && newStr.legth <= 1) {
    return <div className="show">All product</div>;
  } else {
    return <div className="show">{newStr}</div>;
  }
}
