import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import s from "./style.module.scss";

export default function ProductCateg() {
  const { name } = useParams();

  const [posts, setPost] = useState([]);
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${name}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [name]);

  return (
    <div className={s.main}>
      <h1>{name}</h1>
      <div className={s.card}>
        {posts.map((post) => (
          <Link key={post?.id} to={`/single/${post?.id}`}>
            <div className={s.grid}>
              <div className={s.flex}>
                <img src={post?.image} alt="" />
                <p> {post?.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
