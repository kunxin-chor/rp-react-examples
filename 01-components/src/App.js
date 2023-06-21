import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Footer from './Footer';
import "./styles.css";
import FineCalculator from './FineCalculator';

// App.js is a React component
// A component is the basic building blocks of a React app
function App() {
  return (
    // The following is JSX
    // JSX is a syntax extension to JavaScript
    // Looks like JavaScript but actually is not
    <>
      <Header />
      <div className="container">
        <h1 className="title">AllTheBooks Library</h1>
        <img src={require('./library.jpg')} className="img-fluid" alt="title"/>
        <div>
          <span style={{
            fontVariant: 'small-caps',
          }}>Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>

        <FineCalculator/>

      </div>
      <Footer color="skyblue" />
    </>
  );
}

export default App;
