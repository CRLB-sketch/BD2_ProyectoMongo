import './App.css'
import React, { useState } from 'react'
import Login from './Login';
// import Register from './Register';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  const [token, setToken] = useState()

  if(!token){
    return(
      <Login setToken={setToken}/>
    )    
  }
  
  return (

    <div className="App">
      {/* <BrowserRouter>
        <Route path="/register">
          <Register />
        </Route>        
      </BrowserRouter> */}
      <h1>Bienvenido jaja</h1>
    </div>
  );
}

export default App;
