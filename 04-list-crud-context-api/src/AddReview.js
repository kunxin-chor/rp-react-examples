import React, { useContext } from 'react';
import ReviewForm from './ReviewForm';
import { ReviewContext } from './ReviewContext';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
  const context = useContext(ReviewContext);
  const navigate = useNavigate();

  const handleSubmit = (review) => {
    context.addReview(review);
    navigate('/')
  };

  return (
    <div>
      <h2>Add Review</h2>
      <ReviewForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddReview;
