import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import sn from "./style.module.scss";
import Back from "../../components/back";

export default function Single() {
  const { id } = useParams();

  console.log(id);
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <>
      <div className={sn.btn}></div>
      <div>
        {post && (
          <div className={sn.card}>
            <div className={sn.flex}>
              <div className={sn.right}>
                <h1 className={sn.title}>{post.title}</h1>
                <p className={sn.description}>{post.description}</p>
              </div>
              <div className={sn.left}>
                <img src={post.image} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
