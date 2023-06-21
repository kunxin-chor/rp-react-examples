import React, { useState } from 'react';
import { ReviewProvider } from './ReviewContext';
import ShowReviews from './ShowReviews';
import AddReview from './AddReview';
import EditReview from './EditReview';
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  const [page, setPage] = useState('show');
  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    setEditIndex(index);
    setPage('edit');
  };

  return (
    <ReviewProvider>
      <div className="container mt-5">
        {page === 'show' && <ShowReviews setEditIndex={handleEdit} setPage={setPage} />}
        {page === 'add' && <AddReview setPage={setPage} />}
        {page === 'edit' && <EditReview index={editIndex} setPage={setPage} />}
      </div>
    </ReviewProvider>
  );
};

export default App;
