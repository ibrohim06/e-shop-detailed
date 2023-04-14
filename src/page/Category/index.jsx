import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
import { Link } from "react-router-dom";

export default function Categ() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div className={s.navbar}>
      <ul>
        {post?.map((e) => {
          return (
            <li key={e}>
              <Link to={`/product/category/${e}`}>{e}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
