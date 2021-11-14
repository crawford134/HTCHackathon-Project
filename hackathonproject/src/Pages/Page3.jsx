import React from 'react';
import Header from '../Components/Header';
import Survey from '../Components/Survey';

function Page3() {
  return (
    <div className="BG-color">
      <Header />
      <h1 style={{paddingTop: '70px', color: '#ffff', fontSize: '70px'}}>Mental Health Survey</h1>
      <header className = 'Questions'> 
      <Survey/>
      </header>
    </div>
  );
}

export default Page3;
