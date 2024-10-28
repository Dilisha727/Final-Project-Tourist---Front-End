/*import React from 'react';

const Welcome = () => {
  return (
    <div className="welcome-section text-center my-5">
      <img src={require('../image/Section.png')} alt="Welcome" className="img-fluid" />
    </div>
  );
};

export default Welcome;
*/

// src/components/Welcome.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome for icons
import PopupModal from './PopupModal'; // Import the PopupModal component
import './App.css'; // Custom CSS

const Welcome = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container-fluid">
      <div className="row align-items-center" style={{ height: '100vh' }}>

        {/* Left Side - Header, Paragraph, Icons, and Button */}
        <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column" style={{ paddingLeft: '70px' }}>
          <h1>Come with us, and let us plan your perfect Sri Lankan adventure!</h1>
          <p>
            We specialize in creating tailor-made experiences just for you. Whether you're seeking cultural discoveries, adventure, or relaxation, our AI-powered assistant will help you craft a personalized itinerary that fits your budget, preferences, and travel dates. Trust us to make your Sri Lankan journey unforgettable!
          </p>

          {/* Button to trigger the modal */}
          <button className="btn btn-warning btn-lg" style={{ backgroundColor: '#B7B657', borderColor: '#B7B657', color: '#fff' }} onClick={handleShowModal}>
            Click to create your dream trip with AI <i className="fas fa-arrow-right"></i>
          </button>

          <div className="welcome-section text-center my-1">
            <img
              src={require('../image/Margin.png')}
              alt="Welcome"
              className="img-fluid"
              style={{ maxWidth: '450px', height: 'auto' }}
            />
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="col-lg-6 text-center">
          <img
            src={`${process.env.PUBLIC_URL}/img/1.jpeg`}
            alt="Ayubowan"
            className="img-fluid"
            style={{ maxHeight: '90vh' }}
          />
        </div>

        {/* Include the PopupModal Component */}
        <PopupModal show={showModal} handleClose={handleCloseModal} />

      </div>
    </div>
  );
};

export default Welcome;
