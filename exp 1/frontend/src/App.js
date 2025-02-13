//import logo from './logo.svg';
import './App.css';
import Register from './Register';
import { useState } from 'react';
import Login from './Login';

function App() {
  const[islogin, setislogin] = useState(false);
  return (
    <div className="App">
      <button onClick={()=> setislogin(!islogin)}> change</button>
      {
        islogin ? <Login/> : <Register/>
      }
      
    </div>
  );
}

export default App;
