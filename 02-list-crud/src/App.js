import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [reviews, setReviews] = useState([
    { restaurant: 'Restaurant A', review: 'Great food!', rating: 5 },
    { restaurant: 'Restaurant B', review: 'Good service.', rating: 4 },
  ]);

  const [restaurant, setRestaurant] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(3);

  const [editIndex, setEditIndex] = useState(-1);

  const isEditing = editIndex !== -1;

  const resetForm = () => {
    setRestaurant('');
    setReview('');
    setRating(3);
  };

  const handleSubmit = () => {
    const newReview = { restaurant, review, rating: Number(rating) };
    if (!isEditing) {
      // Adding a new review
      setReviews([...reviews, newReview]);
    } else {
      // Updating an existing review
      const updatedReviews = [...reviews];
      updatedReviews[editIndex] = newReview;
      setReviews(updatedReviews);
      setEditIndex(-1); // Reset edit index
    }
    resetForm();
  };

  const handleEdit = (index) => {
    const reviewToEdit = reviews[index];
    setRestaurant(reviewToEdit.restaurant);
    setReview(reviewToEdit.review);
    setRating(reviewToEdit.rating);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setReviews([...reviews.slice(0, index), ...reviews.slice(index + 1)]);
  };

  const handleCancel = () => {
    setEditIndex(-1);
    resetForm();
  };

  const renderForm = () => (
    <div>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Restaurant name"
        value={restaurant}
        onChange={(e) => setRestaurant(e.target.value)}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Your review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <select
        className="form-control mb-2"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button className="btn btn-primary me-2" onClick={handleSubmit}>
        {isEditing ? 'Update' : 'Submit'}
      </button>
      {isEditing && (
        <button className="btn btn-secondary" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </div>
  );

  const renderReview = (review, index) => (
    <div>
      <strong>{review.restaurant}</strong> - {review.review} - Rating: {review.rating}/5
      <button className="btn btn-secondary btn-sm ms-3" onClick={() => handleEdit(index)}>Edit</button>
      <button className="btn btn-danger btn-sm ms-1" onClick={() => handleDelete(index)}>Delete</button>
    </div>
  );

  return (
    <div className="container mt-5">
      <h2>Restaurant Reviews</h2>
      <ul className="list-group mb-4">
        {reviews.map((review, index) => (
          <li key={index} className="list-group-item">
            {isEditing && editIndex === index ? renderForm() : renderReview(review, index)}
          </li>
        ))}
      </ul>
      {isEditing || renderForm()}
    </div>
  );
};

export default App;
