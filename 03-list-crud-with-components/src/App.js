import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewForm from './ReviewForm';
import Review from './Review';

const App = () => {
  const [reviews, setReviews] = useState([
    { restaurant: 'Restaurant A', review: 'Great food!', rating: 5 },
    { restaurant: 'Restaurant B', review: 'Good service.', rating: 4 },
  ]);

  const [editIndex, setEditIndex] = useState(-1);

  const handleFormSubmit = (formData) => {
    if (editIndex === -1) {
      // Adding new review
      setReviews([...reviews, formData]);
    } else {
      // Updating existing review
      const updatedReviews = [...reviews];
      updatedReviews[editIndex] = formData;
      setReviews(updatedReviews);
      setEditIndex(-1);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setReviews([...reviews.slice(0, index), ...reviews.slice(index + 1)]);
  };

  return (
    <div className="container mt-5">
      <h2>Restaurant Reviews</h2>
      <ul className="list-group mb-4">
        {reviews.map((review, index) => (
          <li key={index} className="list-group-item">
            {editIndex === index ? (
              <ReviewForm
                onSubmit={handleFormSubmit}
                onCancel={() => setEditIndex(-1)}
                initialRestaurant={review.restaurant}
                initialReview={review.review}
                initialRating={review.rating}
                isEditing={true}           
              />
            ) : (
              <Review
                review={review}
                onEdit={() => handleEdit(index)}
                onDelete={() => handleDelete(index)}
              />
            )}
          </li>
        ))}
      </ul>
      {editIndex === -1 && (
        <ReviewForm onSubmit={handleFormSubmit} onCancel={() => setEditIndex(-1)} isEditing={false} />
      )}
    </div>
  );
};

export default App;
