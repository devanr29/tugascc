import React from 'react';

const MainContent = () => {
  return (
    <div className="w3-container w3-padding-64 w3-center" id="team">
      <div style={{ marginTop: '-10px', marginBottom: '-20px' }}>
        <b style={{ fontSize: '40px' }}>Anggota Tim</b>
      </div>
      <div style={{ marginBottom: '-0.01px' }}>
        <p style={{ fontSize: '20px' }}>Dengan bangga memperkenalkan:</p>
      </div>
      <div className="w3-row"><br/>
        {/* Tim Details */}
        <div className="w3-quarter">
          <img src="./gambar/Natasha.JPG" alt="Boss" style={{ width: '45%' }} className="w3-circle w3-hover-opacity"/>
          <h3><b>Natasha Fedora Barus</b></h3>
          <p style={{ fontSize: '20px' }}>natashafedorab@gmail.com</p>
          <p>Instagram: @natashafbarus</p>
        </div>
        {/* Add more team members here */}
      </div>
    </div>
  );
}

export default MainContent;