import './App.css';
// import About from './Components/About';
import Nav from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';


function App() {
  const [darkMode, setDarkMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (msg , type) => {
    setAlert({
      msg : msg ,
      type : type
    })
  }

  const toggleMode = () => {
    if(darkMode === 'light'){
      setDarkMode('dark')
      document.body.style.backgroundColor = '#181741'
      showAlert('Dark Mode is enabled','success')
    }
    else{
      setDarkMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode is enabled','success')
    }
  }

  return (
    <>
      <Nav title='T-Utils' mode={darkMode} toggleMode={toggleMode} />
      <Alert alert = {alert}/>
      <div className="container my-3">
        <TextForm heading='Enter the text to analyse' mode={darkMode} showAlert = {showAlert}/>
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
