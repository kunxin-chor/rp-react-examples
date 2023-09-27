import React, { createContext, useState, useEffect } from 'react';

const ReviewContext = createContext();

const base_api_url = 'https://kcx-rest-reviews-api.onrender.com';

const ReviewProvider = (props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const response = await fetch(`${base_api_url}/reviews`);
    const data = await response.json();
    setReviews(data);
  };

  const addReview = async (review) => {
    review.rating = parseInt(review.rating);
    const response = await fetch(`${base_api_url}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    setReviews([...reviews, review]);
    await response.json();

  };

  const updateReview = async (id, updatedReview) => {
    updatedReview.rating = parseInt(updatedReview.rating); 
    updatedReview._id = id;
    setReviews(reviews.map((review) => (review._id === id ? updatedReview : review)));
    const response = await fetch(`${base_api_url}/reviews/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedReview),
    });
    await response.json();

  };

  const deleteReview = async (index) => {
    const reviewToDelete = reviews[index];
    const id = reviewToDelete._id;
    setReviews(reviews.filter((review) => review._id !== id));
    await fetch(`${base_api_url}/reviews/${id}`, {
      method: 'DELETE',
    });

  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview, updateReview, deleteReview }}>
      {props.children}
    </ReviewContext.Provider>
  );
};

export  {ReviewProvider, ReviewContext};
