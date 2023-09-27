import React, { useState } from 'react';

const ReviewForm = ({ initialRestaurant = '', initialReview = '', initialRating = 3, onSubmit }) => {
  const [restaurant, setRestaurant] = useState(initialRestaurant);
  const [review, setReview] = useState(initialReview);
  const [rating, setRating] = useState(initialRating);

  const handleSubmit = () => {
    onSubmit({ restaurant, review, rating });
  };

  return (
    <div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Restaurant name"
          value={restaurant}
          onChange={(e) => setRestaurant(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Your review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Rating:</label>
        <select
          className="form-control"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ReviewForm;
