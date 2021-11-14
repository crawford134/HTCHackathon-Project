import { useEffect, useState } from 'react';
import { ACCOUNT_NAME } from '../Data/logindata';
import { useHistory } from 'react-router-dom';


let uname = ACCOUNT_NAME.username
let pass = ACCOUNT_NAME.password


function HomePage() {
  let history = useHistory();
  const randomId = Math.floor(Math.random() * 2)

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
       history.push('/Page3')
    }
  }

  return (
    <div className="App">
      <h1 className = "home-title">Welcome to Positive Mind</h1>
        <div className ="home-format">
            {displayQuote()}
            <form>
              <label>Username:</label>  
              <input type="text" value={values.username} onChange={handleUsernameChange}/>

              <label>Password:</label>
              <input type="text" value={values.password} onChange={handlePasswordChange}/>
              
              <input type="submit" value="Login" onClick = {handleSubmit}/>
            </form>
        </div>
    </div>
  );
}

export default HomePage;
