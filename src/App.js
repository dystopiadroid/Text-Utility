import './App.css';
// import About from './Components/About';
import Nav from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'


function App() {
  const [darkMode, setDarkMode] = useState('light')

  const toggleMode = () => {
    if(darkMode === 'light'){
      setDarkMode('dark')
      document.body.style.backgroundColor = '#181741'
    }
    else{
      setDarkMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Nav title='T-Utils' mode={darkMode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading='Enter the text to analyse' mode={darkMode}/>
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
