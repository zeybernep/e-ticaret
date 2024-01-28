import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Products({user}) {
  const [Last10Products, setLast10Products] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((res) => setLast10Products(res));
  });

  return (
    <>
      <h2>Ürünler</h2>
      <div className="row row-cols-sm-3  row-cols-md-4">
        {Last10Products.map((product) => (
          <ProductCard user={user} key={product.id} item={product} />
        ))}
      </div>
    </>
  );
}

export default Products;