import React, { createContext, useState } from "react";

const ReviewContext = createContext();

const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([
    { restaurant: "Restaurant A", review: "Great food!", rating: 5 },
    { restaurant: "Restaurant B", review: "Good service.", rating: 4 }
  ]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  const updateReview = (index, updatedReview) => {
    const updatedReviews = [...reviews];
    updatedReviews[index] = updatedReview;
    setReviews(updatedReviews);
  };

  const deleteReview = (index) => {
    setReviews([...reviews.slice(0, index), ...reviews.slice(index + 1)]);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview, updateReview, deleteReview }}>
      {children}
    </ReviewContext.Provider>
  );
};



export { ReviewProvider, ReviewContext };
