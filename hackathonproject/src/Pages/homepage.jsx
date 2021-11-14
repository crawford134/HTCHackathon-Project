import { useEffect, useState } from 'react';
import { ACCOUNT_NAME } from '../Data/logindata';
import { useHistory } from 'react-router-dom';


let uname = ACCOUNT_NAME.username
let pass = ACCOUNT_NAME.password
const randomId = Math.floor(Math.random() * 7)

function HomePage() {
  let history = useHistory();

  const [quotes, setQuotes] = useState([]);
    useEffect(() => {
        fetch("./Information/Quotes.json")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setQuotes(data);
            })
    }, []);

  const displayQuote = () => {
    return quotes.map((quote, i) => {
      if(quote.id == randomId){
        return(
          <h2 className = "quote">{quote.quote} </h2>
        )
      }
    });
  }

  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const handleUsernameChange = (event) => {
    setValues({...values, username: event.target.value})
  }

  const handlePasswordChange = (event) => {
    setValues({...values, password: event.target.value})
  }

  const handleSubmit = () => {
    if(values.username == uname && values.password == pass){
       history.push('/Page2')
    } else{
      alert("Your Username or password was incorrect, Please try again!")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1 className = "home-title"  style={{color:'#fff', paddingTop:'30px'}}>Welcome to Positive Mind</h1>
      <img src="/PM_Logo.png"/>
      {displayQuote()}
        <div style={{paddingBottom:"100px"}}>
            <form>
              <label>Username:</label>  
              <input type="text" value={values.username} onChange={handleUsernameChange}/>
              <label>Password:</label>
              <input type="password" value={values.password} onChange={handlePasswordChange}/>
              <br></br>
              <input type="submit" value="Login" onClick = {handleSubmit}/>
            </form>
        </div>
        </header>
    </div>
  );
}

export default HomePage;
