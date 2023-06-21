import React, { useContext } from 'react';
import ReviewForm from './ReviewForm';
import { ReviewContext } from './ReviewContext';

const AddReview = ({ setPage }) => {
  const context = useContext(ReviewContext);

  const handleSubmit = (review) => {
    context.addReview(review);
    setPage('show');
  };

  return (
    <div>
      <h2>Add Review</h2>
      <ReviewForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddReview;
