import React from 'react';

const Footer = () => {
  return (
    <footer className="w3-container w3-padding-32 w3-theme-d1 w3-center">
      <b style={{ color: 'white', fontSize: '30px' }}>Ikuti Kami</b><br/><br/>
      <a className="w3-button w3-large w3-teal" href="javascript:void(0)" title="Facebook"><i className="fa fa-facebook"></i></a>
      <a className="w3-button w3-large w3-teal" href="javascript:void(0)" title="Twitter"><i className="fa fa-twitter"></i></a>
      <a className="w3-button w3-large w3-teal" href="javascript:void(0)" title="Google +"><i className="fa fa-google-plus"></i></a>
      <a className="w3-button w3-large w3-teal" href="javascript:void(0)" title="Instagram"><i className="fa fa-instagram"></i></a>
    </footer>
  );
}

export default Footer;