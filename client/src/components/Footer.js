import React from 'react';

const Footer = () => {

  const footerStyle = {
    position:"relative",
    bottom:"0",
    width:"100%",
  }

  return (
    <footer className="w-100 mt-auto text-dark p-4" style={footerStyle}>
      <div className="container text-center mb-5">
        <h4>&copy; {new Date().getFullYear()} - Web-the-Builder</h4>
      </div>
    </footer>
  );
};

export default Footer;
