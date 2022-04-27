import React, {useState} from "react";

function Item({ name, category }) {
  const[inCart, setInCart] = useState(false)

  function onClickHandler(){
    setInCart(!inCart)
  }

  const itemClass = inCart ? "in-cart" : ""
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={onClickHandler} className="add">{inCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
