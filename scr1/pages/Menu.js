import React from "react";
import menuItems from "../data";
import "../style/Menu.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const addToCart = (price) => {
    let total = parseFloat(localStorage.getItem("totalPrice")) || 0;
    total += price;
    localStorage.setItem("totalPrice", total);
    navigate("/order");
  };

  return (
    <section className="menu">
      <div className="heading">
        <span>Menu</span>
        <h2>Tasty menu of the week</h2>
      </div>

      <div className="menu-container">
        {menuItems.map((item) => (
          <div className="box" key={item.id}>
            <div className="box-img">
              <img src={item.img} alt={item.name} />
            </div>

            <h2>{item.name}</h2>
            <h3>Tasty Food</h3>
            <span>${item.price}</span>

            <button onClick={() => addToCart(item.price)} className="btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
