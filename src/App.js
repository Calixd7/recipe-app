import React,{useEffect, useState} from "react"; 
//  import './App.css';

const App  = () => {

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
   
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Effect has been run");
  }, [counter]);

  return ( 
    <div className="App">
      <form className = "search-form">
        <input className = "search-bar" type = "text"/>
        <button className = "search-button" type="submit">
          Search
        </button>
    </form>
    <h1 onClick ={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );

};


export default App;
