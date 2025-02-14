//Do not change //////////////////////////////////
import { calculateStarAverage } from "../src/logic.js";

const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//1. Append the reviews to the DOM
const Review = ({ username, image, star, review }) => {
  return (
    <div className="review_container">
      <img src={image} alt={username} />
      <div>
        <h3>{username}</h3>
        <p> {star}</p>
        <p>{review}</p>
      </div>
    </div>
  );
};

const ReviewList = ({ reviews }) => {
  return (
    <div className="reviews">
      {reviews.map((item, index) => (
        <Review
          key={index}
          username={item.username}
          star={item.star}
          review={item.review}
          image={item.image}
        />
      ))}
    </div>
  );
};
//2. Append new reviews to the DOM from the form
const addReview = (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const star = parseInt(event.target.star.value);
  const reviewText = event.target.review.value;

  if (!username || !star || !reviewText) return;

  const newReview = {
    username,
    image: "./images/avatar1.png", 
    star,
    review: reviewText,
  };

  reviews.push(newReview);
  renderReviews();
  event.target.reset();
};

// Render Reviews
const renderReviews = () => {
  const root = document.getElementById("review-root");
  ReactDOM.render(<ReviewList reviews={reviews} />, root);
};

// Initialize render
document.addEventListener("DOMContentLoaded", () => {
  renderReviews();
  document.getElementById("review-form").addEventListener("submit", addReview);
});