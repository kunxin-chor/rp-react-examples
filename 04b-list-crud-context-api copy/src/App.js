import React, { useState } from 'react';

// Review Context
import { ReviewProvider } from './ReviewContext';

// React Router DOM objects
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// the pages
import ShowReviews from './ShowReviews';
import AddReview from './AddReview';
import EditReview from './EditReview';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <ReviewProvider>
      <BrowserRouter>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<ShowReviews />} />
          <Route path="/add" element={<AddReview />} />
          <Route path="/edit/:index" element={<EditReview />} />
        </Routes>

      </div>
      </BrowserRouter>
    </ReviewProvider>
  );
};

export default App;
