import React from 'react';

const Header = () => {
  return (
    <div className="w3-top">
      <div className="w5-bar w3-theme-d2 w3-left-align">
        <a className="w5-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-hover-white w3-theme-d2" href="javascript:void(0);" onClick={openNav}><i className="fa fa-bars"></i></a>
        <a href="#" className="w3-bar-item w3-button w3-teal"><i className="fa fa-home w3-margin-right"></i>Beranda</a>
        <a href="#team" className="w3-bar-item w3-button w3-hide-small w3-hover-white">Tim</a>
        <a href="#work" className="w3-bar-item w3-button w3-hide-small w3-hover-white">Proyek</a>
        <a href="#contact" className="w3-bar-item w3-button w3-hide-small w3-hover-white">Kontak</a>
      </div>
    </div>
  );
}

export default Header;