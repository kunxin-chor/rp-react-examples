import React, { useContext } from 'react';
import { ReviewContext } from './ReviewContext';

const ShowReviews = ({ setEditIndex, setPage }) => {
  const context = useContext(ReviewContext);

  const handleEdit = (index) => {
    setEditIndex(index);
    setPage('edit');
  };

  return (
    <div>
      <h2>Restaurant Reviews</h2>
      <ul className="list-group mb-4">
        {context.reviews.map((review, index) => (
          <li key={index} className="list-group-item">
            <div>
              <strong>{review.restaurant}</strong> - {review.review} - Rating: {review.rating}/5
              <button className="btn btn-secondary btn-sm ms-3" onClick={() => handleEdit(index)}>Edit</button>
              <button className="btn btn-danger btn-sm ms-1" onClick={() => context.deleteReview(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={() => setPage('add')}>Add Review</button>
    </div>
  );
};

export default ShowReviews;
