import './App.css'
import React, { useState } from 'react'
// Importar páginas
import Login from './pages/Login';
import Register from './pages/Register'
import Blog from './pages/Blog'

function App() {

  const [token, setToken] = useState()
  // ready = -1, login = 0, register = 1
  const [ready, setReady] = useState(0)

  if(!token){
    return(
      <div>
        {ready === 0 && <Login setToken={setToken} setReady={setReady}/>}
        {ready === 1 && <Register setToken={setToken} setReady={setReady}/>}
      </div>      
    )    
  }
  
  return (

    <div className="App">
      <Blog user={token}/>
    </div>
  );
}

export default App;
