import './App.css';
// import About from './Components/About';
import Nav from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import About from './Components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (darkMode === 'light') {
      setDarkMode('dark')
      document.body.style.backgroundColor = '#181741'
      showAlert('Dark Mode is enabled', 'success')
    }
    else {
      setDarkMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode is enabled', 'success')
    }
  }

  return (
    <>
    <Router>
      <Nav title='T-Utils' mode={darkMode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <div className="container my-3">
            <TextForm heading='Enter the text to analyse' mode={darkMode} showAlert={showAlert} />
          </div>
        </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
