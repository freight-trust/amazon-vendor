import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ name, price, user, image, id }) {
  return (
    <div className="product-card">
      <div
        className="product-card__image"
        style={{ background: `url(${image}) no-repeat center center / cover` }}
      ></div>
      <div className="product-card__name">{name}</div>
      <div className="product-card__price">{price}</div>
      <div className="product-card__user">{user.name}</div>
      <Link
        to={{
          pathname: "/product-detail",
          state: {
            id,
          },
        }}
        className="product-card__single"
      >
        View detail
      </Link>
      <hr />
    </div>
  );
}
