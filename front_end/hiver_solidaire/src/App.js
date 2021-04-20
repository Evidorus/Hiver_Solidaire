import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import 'antd/dist/antd.css'
import { triggerFocus } from 'antd/lib/input/Input';

function App() {
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    fetch("http://localhost:8000/profil", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(response => {
        console.log(response.status);
        if (response.status === 200) {
          setConnected(true)
        } else {
          setConnected(false)
        }
        return response.json()
      })
})
  
  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  ); 
}

export default App;
