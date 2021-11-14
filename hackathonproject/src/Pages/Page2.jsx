import React from 'react'
import Resources from '../Components/Resources';
import SurveyAnswers from '../Data/SurveyAnswers';
import Header from '../Components/Header'

function Page2() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Resources />
        {console.log("Page2:", SurveyAnswers)}
      </header>
    </div>
  );
}

export default Page2;