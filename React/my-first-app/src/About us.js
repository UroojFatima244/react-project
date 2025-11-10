
import React from 'react';
import './AABout us.css'; // Optional: for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1>Our Company</h1>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <h2>About Us</h2>
        <p>
          Welcome to Our Company! We are passionate about delivering high-quality products and services that help our clients succeed.
          Our team of experienced professionals is dedicated to innovation, customer satisfaction, and continuous improvement.
        </p>
        <p>
          Since our founding, we have worked with companies of all sizes, delivering custom solutions that meet real business needs.
          We believe in transparency, teamwork, and always putting the customer first.
        </p>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
