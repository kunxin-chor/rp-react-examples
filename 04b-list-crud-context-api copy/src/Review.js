import React from 'react';

const Review = ({ review, onEdit, onDelete }) => {
  return (
    <div>
      <strong>{review.restaurant}</strong> - {review.review} - Rating: {review.rating}/5
      <button className="btn btn-secondary btn-sm ms-3" onClick={onEdit}>Edit</button>
      <button className="btn btn-danger btn-sm ms-1" onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Review;
