import React, { useEffect,useState } from "react";
import updateSurveyAnswers from "../Data/SurveyAnswers";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


export default function Survey(){
    let MCquestions = {
    gender:'',
    age:'',
    dailylifephysical:'',
    dailylifeemotional:'',
    mentalhealth:'',
    low:'',
    relationships:'',
    calmandpeaceful:'',
    energetic:'',
    gloomy:'',
    angry:'',
    mentaldisorder:'',
    mentalhealthexamination:'',
    familymentaldisorders:'',
    familymember:'',
    dailyactivities:'',
    dailyLightphysicalactivities:'',
    dailyModeratephysicalactivities:'',
    dailyHeavyphysicalactivities:'',
    therapist:'',
    medication:'',
    sleephours:'',
    sleepquality:'',
    maritalstatus:'',
    smoker:'',
    alcoholic:'',
    lifepositivity:'',
   id: null,
   errormessage: ''
};
    const [MCq, setMultipleChoiceQuestions] = useState(MCquestions);    
    

            
    useEffect(() => {
        console.log('useeffect:',MCq);
      }, [MCq]) 
    

    const myChangeHandler = async (event) => { 
        let nam = event.target.name;
        let val = event.target.value;

        if (nam === "id") {
        console.log(val)   

        }
        console.log('value',val)

        
        setMultipleChoiceQuestions({...MCq, [nam]: event.target.value})        

    }
    const handleSubmit = () => {
        updateSurveyAnswers(MCq)
        console.log('handling answers:', MCq)
    }
    console.log('handle complete')
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">User Name</label>
      <input type="submit" />
        <label>
    Gender:
          <select onChange={myChangeHandler} name="gender" value={MCq.gender}>
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
          <select onChange={myChangeHandler} name="age" value={MCq.age}>
            <option value="ageA">6-15</option>
            <option value="ageB">16-18</option>
            <option value="ageC">19-25</option>
            <option value="ageD">25+</option>
            </select>
        </label>
        <br />
        <br />


        <label>
    "During the past 4 weeks, have you had any problems with your work or daily life due to your physical health?"
          <select onChange={myChangeHandler} name="dailylifephysical" value={MCq.dailylifephysical}>
            <option value="dailylifephysicalYes">Yes</option>
            <option value="dailylifephysicalNo">No</option>
            <option value="dailylifephysicalDk">"Don't Know"</option>
            </select>
        </label>
        <br />
        <br />

        <label>
    "During the past 4 weeks, have you had any problems with your work or daily life due to any emotional problems, such as feeling depressed, sad, or anxious?"
          <select onChange={myChangeHandler} name="dailylifeemotional" value={MCq.dailylifeemotional}>
            <option value="dailylifeemotionalYes">Yes</option>
            <option value="dailylifeemotionalNo">No</option>
            <option value="dailylifeemotionalDk">"Don't Know"</option>
            </select>
        </label>
        <br />
        <br />


        <label>
    "Overall how would you rate your mental health?"
        <select onChange={myChangeHandler} name="mentalhealth" value={MCq.mentalhealth}>
            <option value="mentalhealtha">Excellent</option>
            <option value="mentalhealthb">Somewhat good</option>
            <option value="mentalhealthc">Average</option>
            <option value="mentalhealthd">Somewhat poor</option>
            <option value="mentalhealthe">Poor</option>
            <option value="mentalhealthf">Not sure</option>
            </select>
        </label>
        <br />
        <br />


        <label>
    "Have you felt particularly low or down for more than 2 weeks in a row?"
        <select onChange={myChangeHandler} name="low" value={MCq.low}>
            <option value="lowa">Very often</option>
            <option value="lowb">Somewhat often</option>
            <option value="lowc">Not so often</option>
            <option value="lowd">Not at all</option>
            </select>
        </label>
        <br />
        <br />


        <label>
    "During the past two weeks, how often has your mental health affected your relationships?"
        <select onChange={myChangeHandler} name="relationships" value={MCq.relationships}>
            <option value="relationshipsa">Very often</option>
            <option value="relationshipsb">Somewhat often</option>
            <option value="relationshipsc">Not so often</option>
            <option value="relationshipsd">Not at all</option>
            </select>
        </label>
        <br />
        <br />


        <label>
    "How often do you experience calm and peaceful?"
        <select onChange={myChangeHandler} name="calmandpeaceful" value={MCq.calmandpeaceful}>
            <option value="calmandpeacefula">Always</option>
            <option value="calmandpeacefulb">Most of the time</option>
            <option value="calmandpeacefulc">About half the time</option>
            <option value="calmandpeacefuld">Once in a while</option>
            <option value="calmandpeacefule">Never</option>
            </select>
        </label>
        <br />
        <br />


         <label>
    "How often do you experience energetic?"
          <select onChange={myChangeHandler} name="energetic" value={MCq.energetic}>
            <option value="energetica">Always</option>
            <option value="energeticb">Most of the time</option>
            <option value="energeticc">About half the time</option>
            <option value="energeticd">Once in a while</option>
            <option value="energetice">Never</option>
            </select>
        </label>    
        <br />
        <br />



        <label>
    "How often do you experience gloomy?"
          <select onChange={myChangeHandler} name="gloomy" value={MCq.gloomy}>
            <option value="gloomya">Always</option>
            <option value="gloomyb">Most of the time</option>
            <option value="gloomyc">About half the time</option>
            <option value="gloomyd">Once in a while</option>
            <option value="gloomye">Never</option>
            </select>
        </label>    
        <br />
        <br /> 


        <label>
    "How often do you experience angry?"
          <select onChange={myChangeHandler} name="angry" value={MCq.angry}>
            <option value="angrya">Always</option>
            <option value="angryb">Most of the time</option>
            <option value="angryc">About half the time</option>
            <option value="angryd">Once in a while</option>
            <option value="angrye">Never</option>
            </select>
        </label>  
        <br />
        <br />   

        <label>
    "Have you ever been diagnosed with a mental disorder before?"
          <select onChange={myChangeHandler} name="mentaldisorder" value={MCq.mentaldisorder}>
            <option value="mentaldisordera">Yes</option>
            <option value="mentaldisorderb">No</option>
            </select>
        </label>  
        <br />
        <br />   


        <label>
    "When did you last get your mental health examination done?"
          <select onChange={myChangeHandler} name="mentalhealthexamination" value={MCq.mentalhealthexamination}>
            <option value="mentalhealthexaminationa">Less than 6 months ago</option>
            <option value="mentalhealthexaminationab">6 months ago</option>
            <option value="mentalhealthexaminationac">A year ago</option>
            <option value="mentalhealthexaminationad">More than a year ago</option>
            </select>
        </label>  
        <br />
        <br />   


        <label>
    "Is there a history of mental disorders in your family?"
          <select onChange={myChangeHandler} name="familymentaldisorders" value={MCq.familymentaldisorders}>
            <option value="familymentaldisordersa">Yes</option>
            <option value="familymentaldisordersb">No</option>
            </select>
        </label>  
        <br />
        <br />


        <label>
    "If Yes, please select which of the family member(s) has/had a history of mental illness."
          <select onChange={myChangeHandler} name="familymember" value={MCq.familymember}>
            <option value="familymembera">Mother</option>
            <option value="familymemberb">Father</option>
            <option value="familymemberc">Brother</option>
            <option value="familymemberd">Sister</option>
            <option value="familymembere">Grandfather</option>
            <option value="familymemberf">Grandmother</option>
            <option value="familymemberg">Other__</option>
            </select>
        </label> 
        <br />
        <br /> 
    
        <label>
    "Does your health limit you in doing daily activities?"
          <select onChange={myChangeHandler} name="dailyactivities" value={MCq.dailyactivities}>
            <option value="dailyactivitiesa">Yes</option>
            <option value="dailyactivitiesab">No</option>
            <option value="dailyactivitiesac">"Don't know"</option>
            </select>
        </label>   
        <br />
        <br />  


        <label>
    "Does your health limit you in doing daily Light physical activities?" 
          <select onChange={myChangeHandler} name="dailyLightphysicalactivities" value={MCq.dailyLightphysicalactivities}>
            <option value="dailyLightphysicalactivitiesa">No problem</option>
            <option value="dailyLightphysicalactivitiesab">Very much</option>
            <option value="dailyLightphysicalactivitiesac">Moderately</option>
            <option value="dailyLightphysicalactivitiesad">Very less</option>
            </select>
        </label>
        <br />
        <br />

        <label>
    "Does your health limit you in doing daily Moderate physical activities?" 
          <select onChange={myChangeHandler} name="dailyModeratephysicalactivities" value={MCq.dailyModeratephysicalactivities}>
            <option value="dailyModeratephysicalactivitiesa">No problem</option>
            <option value="dailyModeratephysicalactivitiesab">Very much</option>
            <option value="dailyModeratephysicalactivitiesac">Moderately</option>
            <option value="dailyModeratephysicalactivitiesad">Very less</option>
            </select>
        </label>
        <br />
        <br />


        <label>
    "Does your health limit you in doing daily Heavy physical activities?" 
          <select onChange={myChangeHandler} name="dailyHeavyphysicalactivities" value={MCq.dailyHeavyphysicalactivities}>
            <option value="dailyHeavyphysicalactivitiesa">No problem</option>
            <option value="dailyHeavyphysicalactivitiesb">Very much</option>
            <option value="dailyHeavyphysicalactivitiesc">Moderately</option>
            <option value="dailyHeavyphysicalactivitiesd">Very less</option>
            </select>
        </label>
        <br />
        <br />


        <label>
    "Have you seen a therapist in the recent past?"
          <select onChange={myChangeHandler} name="therapist" value={MCq.therapist}>
            <option value="therapista">Yes</option>
            <option value="therapistb">No</option>
            </select>
        </label>   
        <br />
        <br />  


        <label>
    "Are you currently taking any medication?"
          <select onChange={myChangeHandler} name="medication" value={MCq.medication}>
            <option value="medicationa">Yes</option>
            <option value="medicationb">No</option>
            </select>
        </label> 
        <br />
        <br />    



        <label>
    "How many hours do you sleep per day?"
            <select onChange={myChangeHandler} name="sleephours" value={MCq.sleephours}>
            <option value="sleephoursa">Less than 4</option>
            <option value="sleephoursb">4-6</option>
            <option value="sleephoursc">7-9</option>
            <option value="sleephoursd">9+</option>
            </select>
        </label> 
        <br />
        <br />    


        <label>
    "How is your quality of sleep?"
          <select onChange={myChangeHandler} name="sleepquality" value={MCq.sleepquality}>
            <option value="sleepqualitya">Very bad</option>
            <option value="sleepqualityb">Bad</option>
            <option value="sleepqualityc">Normal</option>
            <option value="sleepqualityd">Good</option>
            <option value="sleepqualitye">Very good</option>
            </select>
        </label>  
        <br />
        <br />


        <label>
    "What is your marital status?"
          <select onChange={myChangeHandler} name="maritalstatus" value={MCq.maritalstatus}>
            <option value="maritalstatusa">Married</option>
            <option value="maritalstatusb">Widowed</option>
            <option value="maritalstatusc">Divorced</option>
            <option value="maritalstatusd">Separated</option>
            <option value="maritalstatuse">Never married</option>
            </select>
        </label>  
        <br />
        <br />


        <label>
    "Are you a heavy smoker?"
          <select onChange={myChangeHandler} name="smoker" value={MCq.smoker}>
            <option value="smokera">Yes</option>
            <option value="smokerb">No</option>
            </select>
        </label> 
        <br />
        <br /> 

        <label>
    "Are you an alcoholic?"
          <select onChange={myChangeHandler} name="alcoholic" value={MCq.alcoholic}>
            <option value="alcoholica">Yes</option>
            <option value="alcoholicb">No</option>
            </select>
        </label> 
        <br />
        <br />

        <label>
    "How often do you feel positive about your life?"
          <select onChange={myChangeHandler} name="lifepositivity" value={MCq.lifepositivity}>
            <option value="lifepositivitya">Never</option>
            <option value="lifepositivityb">Once in a while</option>
            <option value="lifepositivityc">About half the time</option>
            <option value="lifepositivityd">Most of the time</option>
            <option value="lifepositivitye">Always</option>
            </select>
        </label> 
        <br />
        <br />

        <input type="submit" value="Submit" />
    </form>
    
  );
  
}

