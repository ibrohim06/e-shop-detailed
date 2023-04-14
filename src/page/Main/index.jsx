import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
import { Link, Outlet } from "react-router-dom";

export default function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className={s.main}>
      <Outlet />
      <h1>Product Page</h1>

      <div className={s.card}>
        {posts.map((post) => (
          <Link key={post.id} to={`/single/${post.id}`}>
            <div className={s.grid}>
              <div className={s.flex}>
                <img src={post.image} alt="" />
                <p> {post.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
