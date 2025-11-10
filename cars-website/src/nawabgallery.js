import React from 'react';
import './gallery.css'
import logo from './ASSETS/baby1.jpg';
import baby2 from './ASSETS/baby2.jpg';
import baby3 from './ASSETS/baby3.jpg';
import baby4 from './ASSETS/baby4.jpg';

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Our Collection</h2>
      <div className="gallery-grid">
        <img src={logo} />
        <img src={baby2}/>
        <img src={baby3} />
        <img src={baby4}/>
      </div>
    </div>
  );
};

export default Gallery;
