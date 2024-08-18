import React, { useState } from "react";

function Item({ name, category }) {
 
  const [isInCart, setIsInCart] = useState(false);

  
  const handleAddToCartClick = () => {
    setIsInCart(!isInCart);
  };

  
  const liClass = isInCart ? "in-cart" : "";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCartClick}>
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
