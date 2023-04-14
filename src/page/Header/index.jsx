import React from "react";
import s from "./style.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={s.header}>
      <div className={s.header_flex}>
        <div className={s.header_logo}>
          <img src={"/assets/Globus.png"} alt="" />
        </div>
        <div className={s.header_links}>
          <Link to={"/"}>All Products</Link>
        </div>
      </div>
    </div>
  );
}
