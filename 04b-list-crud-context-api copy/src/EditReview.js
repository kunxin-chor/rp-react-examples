import React, { useContext } from 'react';
import ReviewForm from './ReviewForm';
import { ReviewContext } from './ReviewContext';
import { useParams, useNavigate } from 'react-router-dom';

const EditReview = () => {
  const context = useContext(ReviewContext);
  const {index} = useParams();
  const navigate = useNavigate();
  const reviewToEdit = context.reviews[index];

  const handleSubmit = (updatedReview) => {
    context.updateReview(index, updatedReview);
    navigate('/');
 
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
