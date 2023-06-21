import React, { createContext, useState, useEffect } from 'react';

const ReviewContext = createContext();

const base_api_url = 'https://5000-kunxinchor-restaurantre-j9cyrvtujhj.ws-us100.gitpod.io';

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
    await response.json();
    setReviews([...reviews, review]);
  };

  const updateReview = async (id, updatedReview) => {
    updatedReview.rating = parseInt(updatedReview.rating);
    const response = await fetch(`${base_api_url}/reviews/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedReview),
    });
    await response.json();
    setReviews(reviews.map((review) => (review._id === id ? updatedReview : review)));
  };

  const deleteReview = async (index) => {
    const reviewToDelete = reviews[index];
    const id = reviewToDelete._id;
     await fetch(`${base_api_url}/reviews/${id}`, {
      method: 'DELETE',
    });
    setReviews(reviews.filter((review) => review._id !== id));
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview, updateReview, deleteReview }}>
      {props.children}
    </ReviewContext.Provider>
  );
};

export  {ReviewProvider, ReviewContext};
