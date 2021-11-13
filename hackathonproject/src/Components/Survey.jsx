import React from "react";
import { useForm } from "react-hook-form";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function Survey() {
  const { register, handleSubmit, formState: { errors }, formState } = useForm();
  const onSubmit = async data => {
    await sleep(2000);
    if (data.username === "bill") {
      alert(JSON.stringify(data));
    } else {
      alert("There is an error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">User Name</label>
      <input type="submit" />
      
      

        <br />
        <br />
        <br />
        <label>
    Gender:
          <select>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Anonymous">Prefer not to say</option>
            </select>
        </label>
        <br />
        <br />

        <label>
    Age:
          <select>
            <option value="a">6-15</option>
            <option value="b">16-18</option>
            <option value="c">19-25</option>
            <option value="d">25+</option>
            </select>
        </label>
        <br />
        <br />


        <label>
    During the past 4 weeks, have you had any problems with your work or daily life due to your physical health?:
          <select>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Don't Know">Don't Know</option>
            </select>
        </label>
        <br />
        <br />

        <label>
    During the past 4 weeks, have you had any problems with your work or daily life due to any emotional problems, such as feeling depressed, sad, or anxious?
          <select>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Don't Know">Don't Know</option>
            </select>
        </label>
        <br />
        <br />


        <label>
    Overall how would you rate your mental health?
          <select>
            <option value="a">Excellent</option>
            <option value="b">Somewhat good</option>
            <option value="c">Average</option>
            <option value="d">Somewhat poor</option>
            <option value="e">Poor</option>
            <option value="f">Not sure</option>
            </select>
        </label>
        <br />
        <br />


        <label>
    Have you felt particularly low or down for more than 2 weeks in a row?
          <select>
            <option value="a">Very often</option>
            <option value="b">Somewhat often</option>
            <option value="c">Not so often</option>
            <option value="d">Not at all</option>
            </select>
        </label>
        <br />
        <br />


        <label>
    During the past two weeks, how often has your mental health affected your relationships?
          <select>
            <option value="a">Very often</option>
            <option value="b">Somewhat often</option>
            <option value="c">Not so often</option>
            <option value="d">Not at all</option>
            </select>
        </label>
        <br />
        <br />


        <label>
    How often do you experience calm and peaceful?
          <select>
            <option value="a">Always</option>
            <option value="b">Most of the time</option>
            <option value="c">About half the time</option>
            <option value="d">Once in a while</option>
            <option value="e">Never</option>
            </select>
        </label>
        <br />
        <br />


         <label>
    How often do you experience energetic?
          <select>
            <option value="a">Always</option>
            <option value="b">Most of the time</option>
            <option value="c">About half the time</option>
            <option value="d">Once in a while</option>
            <option value="e">Never</option>
            </select>
        </label>    
        <br />
        <br />



        <label>
    How often do you experience gloomy?
          <select>
            <option value="a">Always</option>
            <option value="b">Most of the time</option>
            <option value="c">About half the time</option>
            <option value="d">Once in a while</option>
            <option value="e">Never</option>
            </select>
        </label>    
        <br />
        <br /> 


        <label>
    How often do you experience angry?
          <select>
            <option value="a">Always</option>
            <option value="b">Most of the time</option>
            <option value="c">About half the time</option>
            <option value="d">Once in a while</option>
            <option value="e">Never</option>
            </select>
        </label>  
        <br />
        <br />   

        <label>
    Have you ever been diagnosed with a mental disorder before?
          <select>
            <option value="a">Yes</option>
            <option value="b">No</option>
            </select>
        </label>  
        <br />
        <br />   


        <label>
    When did you last get your mental health examination done?
          <select>
            <option value="a">Less than 6 months ago</option>
            <option value="b">6 months ago</option>
            <option value="c">A year ago</option>
            <option value="d">More than a year ago</option>
            </select>
        </label>  
        <br />
        <br />   


        <label>
    Is there a history of mental disorders in your family?
          <select>
            <option value="a">Yes</option>
            <option value="b">No</option>
            </select>
        </label>  
        <br />
        <br />


        <label>
    If "Yes", please select which of the family member(s) has/had a history of mental illness.
          <select>
            <option value="a">Mother</option>
            <option value="b">Father</option>
            <option value="c">Brother</option>
            <option value="d">Sister</option>
            <option value="e">Grandfather</option>
            <option value="f">Grandmother</option>
            <option value="g">Other__</option>
            </select>
        </label> 
        <br />
        <br /> 
    
        <label>
    Does your health limit you in doing daily activities? 
          <select>
            <option value="a">Yes</option>
            <option value="b">No</option>
            <option value="c">Don't know</option>
            </select>
        </label>   
        <br />
        <br />  


        <label>
    Does your health limit you in doing daily Light physical activities? 
          <select>
            <option value="a">No problem</option>
            <option value="b">Very much</option>
            <option value="c">Moderately</option>
            <option value="d">Very less</option>
            </select>
        </label>
        <br />
        <br />

        <label>
    Does your health limit you in doing daily Moderate physical activities? 
          <select>
            <option value="a">No problem</option>
            <option value="b">Very much</option>
            <option value="c">Moderately</option>
            <option value="d">Very less</option>
            </select>
        </label>
        <br />
        <br />


        <label>
    Does your health limit you in doing daily Heavy physical activities? 
          <select>
            <option value="a">No problem</option>
            <option value="b">Very much</option>
            <option value="c">Moderately</option>
            <option value="d">Very less</option>
            </select>
        </label>
        <br />
        <br />


        <label>
    Have you seen a therapist in the recent past?
          <select>
            <option value="a">Yes</option>
            <option value="b">No</option>
            </select>
        </label>   
        <br />
        <br />  


        <label>
    Are you currently taking any medication?
          <select>
            <option value="a">Yes</option>
            <option value="b">No</option>
            </select>
        </label> 
        <br />
        <br />    



        <label>
    How many hours do you sleep per day?
          <select>
            <option value="a">Less than 4</option>
            <option value="b">4-6</option>
            <option value="c">7-9</option>
            <option value="c">9+</option>
            </select>
        </label> 
        <br />
        <br />    


        <label>
    How is your quality of sleep?
          <select>
            <option value="a">Very bad</option>
            <option value="b">Bad</option>
            <option value="c">Normal</option>
            <option value="d">Good</option>
            <option value="e">Very good</option>
            </select>
        </label>  
        <br />
        <br />


        <label>
    What is your marital status?
          <select>
            <option value="a">Married</option>
            <option value="b">Widowed</option>
            <option value="c">Divorced</option>
            <option value="d">Separated</option>
            <option value="e">Never married</option>
            </select>
        </label>  
        <br />
        <br />


        <label>
    Are you a heavy smoker?
          <select>
            <option value="a">Yes</option>
            <option value="b">No</option>
            </select>
        </label> 
        <br />
        <br /> 

        <label>
    Are you an alcoholic?
          <select>
            <option value="a">Yes</option>
            <option value="b">No</option>
            </select>
        </label> 
        <br />
        <br />

        <label>
    How often do you feel positive about your life?
          <select>
            <option value="a">Never</option>
            <option value="b">Once in a while</option>
            <option value="c">About half the time</option>
            <option value="d">Most of the time</option>
            <option value="e">Always</option>
            </select>
        </label> 
        <br />
        <br />

    <input type="submit" value="Submit" />
    </form>
  );
}
