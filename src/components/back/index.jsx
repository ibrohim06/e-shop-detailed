import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Back() {
  return (
    <div className="btn">
      <Link to="#" onClick={() => window.history.back()}>
        back
      </Link>
    </div>
  );
}
