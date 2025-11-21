import React from "react";
import "../style/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-heading">
        <h2>Contact Us</h2>
        <p>We would love to hear from you! Reach out anytime.</p>
      </div>

      <div className="contact-container">

        {/* Box 1 – Social */}
        <div className="contact-box">
          <h3>Pizza Pie</h3>
          <span>Connect With Us</span>
          <div className="social">
            <a href="#"><i className="bx bxl-facebook"></i></a>
            <a href="#"><i className="bx bxl-twitter"></i></a>
            <a href="#"><i className="bx bxl-instagram"></i></a>
          </div>
        </div>

        {/* Box 2 – Menu Links */}
        <div className="contact-box">
          <h3>Menu Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/services">Service</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/reviews">Reviews</a></li>
          </ul>
        </div>

        {/* Box 3 – Address */}
        <div className="contact-box address">
          <h3>Contact</h3>
          <p><strong>Address:</strong> Lebanon, Bekaa - Kab Elias Main Road</p>
          <p><strong>Phone:</strong> +961 76 735 324</p>
          <p><strong>Email:</strong> pizzapie@gmail.com</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
