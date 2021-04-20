import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import 'antd/dist/antd.css'

function App() {
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    
})
  
  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  ); 
}

export default App;
