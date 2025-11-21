
import React, { useState, useEffect } from "react";
import "../style/Reviews.css";

// Fixed reviews (نفس يلي كانوا داخل script.js)
const fixedReviews = [
  {
    name: "Emma Johnson",
    review:
      "The best pizza I've ever tasted! The crust is perfectly crispy, and the toppings are so fresh. Highly recommend!",
  },
  {
    name: "Liam Smith",
    review:
      "Absolutely delicious! The cheese blend is amazing, and the sauce has the perfect amount of zest. Will definitely order again.",
  },
  {
    name: "Olivia Brown",
    review:
      "I can't get enough of this pizza. The flavors are incredible, and the ingredients are top-notch. Five stars!",
  },
  {
    name: "Noah Davis",
    review:
      "Hands down, the best pizza place in town. The variety of toppings and the quality of the dough are unbeatable.",
  },
  {
    name: "Ava Wilson",
    review:
      "This pizza is a game-changer. The crust is light and airy, and the toppings are bursting with flavor.",
  },
  {
    name: "William Martinez",
    review:
      "Incredible pizza! The balance of flavors is perfect, and the crust is just the right thickness.",
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  // Load user reviews from localStorage (optional)
  useEffect(() => {
    const savedReviews = localStorage.getItem("userReviews");
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  const [reviewerName, setReviewerName] = useState("");
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      name: reviewerName,
      review: reviewText,
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem("userReviews", JSON.stringify(updatedReviews));

    alert("Thank you for your review! ❤️");

    setReviewerName("");
    setReviewText("");
  };

  return (
    <section className="reviews" id="reviews">
      <div className="heading">
        <span>Reviews</span>
        <h2>What Our Customers Say</h2>
      </div>

      {/* Fixed Reviews */}
      <div className="fixed-reviews">
        {fixedReviews.map((item, index) => (
          <div className="fixed-review" key={index}>
            <h4>{item.name}</h4>
            <p>{item.review}</p>
          </div>
        ))}
      </div>

      {/* Add Review Form */}
      <div className="review-form">
        <h3>Leave a Review</h3>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            value={reviewerName}
            required
            onChange={(e) => setReviewerName(e.target.value)}
          />

          <label>Review:</label>
          <textarea
            rows="4"
            required
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>

          <button type="submit">Submit Review</button>
        </form>
      </div>

      {/* User Reviews */}
      <div className="reviews-container">
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first to add one! 🍕</p>
        ) : (
          reviews.map((item, index) => (
            <div className="review" key={index}>
              <h4>{item.name}</h4>
              <p>{item.review}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Reviews;
