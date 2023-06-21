import React, { useContext } from 'react';
import ReviewForm from './ReviewForm';
import { ReviewContext } from './ReviewContext';

const EditReview = ({ index, setPage }) => {
  const context = useContext(ReviewContext);
  const reviewToEdit = context.reviews[index];

  const handleSubmit = (updatedReview) => {
    context.updateReview(index, updatedReview);
    setPage('show');
  };

  return (
    <div>
      <h2>Edit Review</h2>
      <ReviewForm
        onSubmit={handleSubmit}
        initialRestaurant={reviewToEdit.restaurant}
        initialReview={reviewToEdit.review}
        initialRating={reviewToEdit.rating}
      />
    </div>
  );
};

export default EditReview;
