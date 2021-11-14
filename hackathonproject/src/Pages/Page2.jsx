import React from 'react'
import Resources from '../Components/Resources';
import SurveyAnswers from '../Data/SurveyAnswers';

function Page2() {
  return (
    <div className="App">
      <header className="App-header">
        <Resources />
        {console.log("Page2:", SurveyAnswers)}
      </header>
    </div>
  );
}

export default Page2;