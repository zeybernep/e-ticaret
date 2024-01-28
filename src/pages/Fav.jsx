import React, { useState, useEffect } from "react";
import { ProductCard } from "../products";

function Fav() {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    // localStorage'den favori ürünleri al
    const localFavs = JSON.parse(localStorage.getItem("favs")) ?? [];
    setFavoriteProducts(localFavs);
  }, []); // Boş bağımlılık dizisi, sadece bir kere çalışmasını sağlar

  function handleRemoveFavorite(productId) {
    // Favori ürünü kaldır
    const updatedFavorites = favoriteProducts.filter(
      (product) => product.id !== productId
    );
    setFavoriteProducts(updatedFavorites);
    localStorage.setItem("favs", JSON.stringify(updatedFavorites));
  }

  return (
    <div>
      <h1>Favori Ürünler</h1>
      <div className="row row-cols-sm-3 row-cols-md-4">
        {favoriteProducts.map((product) => (
          <div key={product.id} className="col-sm mb-3">
            <ProductCard item={product} user={null} />
            <button
              className="btn btn-danger"
              onClick={() => handleRemoveFavorite(product.id)}
            >
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fav;