import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', background: '#f8e9e9' }}>
      <p>&copy; {new Date().getFullYear()} Nawab Outfits. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
