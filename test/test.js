import { assert } from "chai";

import { calculateStarAverage } from "../src/logic.js";

const mockReviews = [
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
    image: "./images/avitar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];

describe("calculateStarAverage", () => {
  it("should return the correct average star rating", () => {
    const expectedAverage = (5 + 3 + 1) / mockReviews.length;
    assert.closeTo(calculateStarAverage(mockReviews), expectedAverage, 0.01);
  });

  it("should return NaN when given an empty array", () => {
    assert.isNaN(calculateStarAverage([]));
  });

  it("should return the correct value for a single review", () => {
    const singleReview = [{ username: "Solo", image: "./images/solo.png", star: 4, review: "Nice!" }];
    assert.strictEqual(calculateStarAverage(singleReview), 4);
  });

  it("should return 0 when all reviews have 0 stars", () => {
    const zeroReviews = [
      { username: "User1", image: "./images/user1.png", star: 0, review: "Not great" },
      { username: "User2", image: "./images/user2.png", star: 0, review: "Bad experience" }
    ];
    assert.strictEqual(calculateStarAverage(zeroReviews), 0);
  });

  it("should correctly calculate the average with decimal values", () => {
    const decimalReviews = [
      { username: "John", image: "./images/john.png", star: 2.5, review: "Alright" },
      { username: "Doe", image: "./images/doe.png", star: 3.5, review: "Pretty good" }
    ];
    assert.closeTo(calculateStarAverage(decimalReviews), 3.0, 0.01);
  });
});


