import React from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="home-text">
        <h1>Pizza Taste</h1>
        <h2>The tasty pizza of your choice</h2>
        <Link to="/menu" className="btn">View Menu</Link>
      </div>

      <div className="home-img">
        <img src="/assets/home-img.jpeg" alt="pizza" />
      </div>
    </section>
  );
};

export default Home;
